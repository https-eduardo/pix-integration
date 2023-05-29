import { IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';
import { CreateStockItemDto } from './create-stock-item.dto';

export class UpdateStockItemDto extends CreateStockItemDto {
  @IsNumber()
  @IsPositive()
  stockId: number;

  @IsString()
  @IsOptional()
  content: string;
}
