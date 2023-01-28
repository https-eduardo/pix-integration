import { Transform } from 'class-transformer';
import { IsNumber, IsPositive } from 'class-validator';

export class FindProductByIdDto {
  @IsNumber()
  @IsPositive()
  @Transform(({ value }) => +value)
  id: number;
}

export class FindProductsByDiscordIdDto {
  @IsNumber()
  @IsPositive()
  @Transform(({ value }) => +value)
  discordId: number;
}
