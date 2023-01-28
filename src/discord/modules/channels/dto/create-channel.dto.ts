import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateChannelDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsPositive()
  discordServerId: number;
}
