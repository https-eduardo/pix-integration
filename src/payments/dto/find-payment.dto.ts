import { Transform } from 'class-transformer';
import { IsNumber, IsPositive } from 'class-validator';

export class FindPaymentById {
  @IsNumber()
  @IsPositive()
  @Transform(({ value }) => +value)
  id: number;
}
