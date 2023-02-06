import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from '@prisma/client';
import { MailService } from 'src/mail/mail.service';
import { OrdersService } from 'src/orders/orders.service';
import { PaymentsService } from 'src/payments/payments.service';
import { StockService } from 'src/stock/stock.service';
import { ReceiveMessageDto } from './dto/receive-message.dto';

@Injectable()
export class WebhookService {
  constructor(
    private paymentsService: PaymentsService,
    private ordersService: OrdersService,
    private stockService: StockService,
    private mailService: MailService,
  ) { }

  async handleMessageReceiving({ id, action }: ReceiveMessageDto) {
    if (action === 'payment.updated') {
      const order = await this.ordersService.getByPaymentId(id);
      if (!order) return;
      const { response: paymentInfo } =
        await this.paymentsService.getPaymentStatus(id);
      if (
        order.status !== paymentInfo.status &&
        paymentInfo.status === 'approved'
      )
        // Soon, this response gonna be used to make a request that sends the item to buyer.
        return await this.handleProductDelivery(order);
    }
  }
  private async handleProductDelivery(order: Order) {
    const stockItem = await this.stockService.getFirstStockItem(
      order.productId,
    );
    if (!stockItem) return;

    await this.stockService.deleteOne(stockItem.id);
    await this.ordersService.updateByPaymentId(order.paymentId, {
      status: 'approved',
    });

    this.mailService.sendMail({
      to: order.email,
      html: `<h1>Seus produtos chegaram! 😍</h1> 
      <h3>Dados dos produtos de seu pedido: </h3>
      <ul>
        <li> ${stockItem.content}</li>
      </ul>
      
      <footer><span>Obrigado por comprar usando nossa plataforma.</span></footer>`,
      subject: 'Entrega do seu pedido!',
    });

    return {
      productId: stockItem.productId,
      content: stockItem.content,
      authorDiscordId: order.authorDiscordId,
    };
  }
}
