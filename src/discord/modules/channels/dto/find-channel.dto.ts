import { Transform } from 'class-transformer';
import { IsNumber, IsPositive } from 'class-validator';

export class FindChannelById {
  @IsNumber()
  @IsPositive()
  @Transform(({ value }) => +value)
  id: number;
}
export class FindChannelByProductId {
  @IsNumber()
  @IsPositive()
  @Transform(({ value }) => +value)
  productId: number;
}
