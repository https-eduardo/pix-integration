import { IsNumber, IsPositive, IsString } from 'class-validator';

export class ReceiveMessageDto {
  @IsNumber()
  @IsPositive()
  id: number;

  @IsString()
  action: string;
}
