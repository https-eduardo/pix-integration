import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsUrl,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsNumber()
  @IsPositive()
  channelId: number;

  @IsUrl()
  @IsOptional()
  imageUrl?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  instructions?: string;
}
