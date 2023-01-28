import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateServerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsPositive()
  discordId: number;
}
