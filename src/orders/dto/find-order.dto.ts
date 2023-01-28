import { Transform } from 'class-transformer';
import { IsNumber, IsPositive } from 'class-validator';

export class FindOrderByPaymentIdDto {
  @IsNumber()
  @IsPositive()
  @Transform(({ value }) => +value)
  paymentId: string;
}
