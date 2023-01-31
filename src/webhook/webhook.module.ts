import { Module } from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { WebhookController } from './webhook.controller';
import { PaymentsModule } from 'src/payments/payments.module';
import { OrdersModule } from 'src/orders/orders.module';
import { StockModule } from 'src/stock/stock.module';

@Module({
  imports: [PaymentsModule, OrdersModule, StockModule],
  controllers: [WebhookController],
  providers: [WebhookService],
})
export class WebhookModule {}
