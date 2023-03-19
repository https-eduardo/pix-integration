import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PaymentsService } from 'src/payments/payments.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductsService } from 'src/products/products.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import axios from 'axios';

@Injectable()
export class OrdersService {
  constructor(
    private prisma: PrismaService,
    private paymentsService: PaymentsService,
    private productsService: ProductsService,
  ) { }

  async create({ authorDiscordId, productId, email }: CreateOrderDto) {
    try {
      const product = await this.productsService.findOne(productId);

      if (!product || product.stockItems.length === 0)
        throw new NotFoundException();

      const { response: payment } = await this.paymentsService.createPixPayment(
        {
          description: product.description,
          transaction_amount: product.price,
          payer_email: email,
        },
      );

      return await this.prisma.order.create({
        data: {
          authorDiscordId,
          product: { connect: { id: productId } },
          email,
          paymentId: payment.id,
        },
        include: { product: true },
      });
    } catch {
      throw new BadRequestException();
    }
  }

  async updateByPaymentId(paymentId: number, { status }: UpdateOrderDto) {
    try {
      return await this.prisma.order.update({
        where: { paymentId },
        data: { status },
      });
    } catch {
      throw new BadRequestException();
    }
  }

  async getByPaymentId(paymentId: number) {
    try {
      return await this.prisma.order.findUnique({
        where: { paymentId },
        include: { product: true },
      });
    } catch {
      throw new BadRequestException();
    }
  }

  async deleteByPaymentId(paymentId: number) {
    try {
      return await this.prisma.order.delete({
        where: { paymentId },
      });
    } catch {
      throw new BadRequestException();
    }
  }

  async notifyOrderFinish({
    status,
    authorDiscordId,
  }: {
    status: string;
    authorDiscordId: string;
  }) {
    return axios.post(`http://localhost:8080/order-finish`, {
      status,
      authorDiscordId,
    });
  }
}
