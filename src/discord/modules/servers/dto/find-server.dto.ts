import { IsNumber, IsPositive } from 'class-validator';

export class FindServerById {
  @IsNumber()
  @IsPositive()
  id: number;
}

export class FindServerByDiscordId {
  @IsNumber()
  @IsPositive()
  discordId: number;
}
