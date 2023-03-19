import { Transform } from 'class-transformer';
import { IsNumber, IsString, IsPositive, IsNotEmpty } from 'class-validator';

export class FindProductByIdDto {
  @IsNumber()
  @IsPositive()
  @Transform(({ value }) => +value)
  id: number;
}

export class FindProductsByDiscordIdDto {
  @IsString()
  @IsNotEmpty()
  discordId: string;
}
