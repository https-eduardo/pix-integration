import { IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class CreateStockItemDto {
  @IsNumber()
  @IsPositive()
  productId: number;

  @IsString()
  @IsOptional()
  content: string;
}
