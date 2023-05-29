import { Transform } from 'class-transformer';
import { IsNumber, IsPositive } from 'class-validator';

export class FindStockByIdDto {
  @IsNumber()
  @IsPositive()
  @Transform(({ value }) => +value)
  id: number;
}
