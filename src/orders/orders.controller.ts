import { Body, Controller, Post } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly service: OrdersService) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    return await this.service.create(createOrderDto);
  }
}
