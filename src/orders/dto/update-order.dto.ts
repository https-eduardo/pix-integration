import { IsIn } from 'class-validator';
import { OrderStatus } from './create-order.dto';

export class UpdateOrderDto {
  @IsIn(['pending', 'approved', 'canceled'])
  status: OrderStatus;
}
