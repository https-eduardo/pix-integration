import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PaymentsModule } from 'src/payments/payments.module';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [PaymentsModule, PrismaModule, ProductsModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
