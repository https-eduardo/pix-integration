import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebhookModule } from './webhook/webhook.module';
import { ConfigModule } from '@nestjs/config';
import { PaymentsModule } from './payments/payments.module';
import { ProductsModule } from './products/products.module';
import { PrismaModule } from './prisma/prisma.module';
import { StockModule } from './stock/stock.module';
import { OrdersModule } from './orders/orders.module';
import { DiscordServersModule } from './discord/modules/servers/servers.module';
import { DiscordChannelsModule } from './discord/modules/channels/channels.module';

@Module({
  imports: [
    WebhookModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PaymentsModule,
    ProductsModule,
    PrismaModule,
    StockModule,
    OrdersModule,
    DiscordServersModule,
    DiscordChannelsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
