import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export type OrderStatus = 'pending' | 'approved' | 'canceled';

export class CreateOrderDto {
  @IsNumber()
  @IsPositive()
  productId: number;

  @IsString()
  @IsNotEmpty()
  authorDiscordId: string;

  @IsEmail()
  email: string;
}
