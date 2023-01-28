import { IsEmail, IsIn, IsNumber, IsPositive } from 'class-validator';

export type OrderStatus = 'pending' | 'approved' | 'canceled';

export class CreateOrderDto {
  @IsNumber()
  @IsPositive()
  productId: number;

  @IsNumber()
  @IsPositive()
  authorDiscordId: number;

  @IsEmail()
  email: string;
}
