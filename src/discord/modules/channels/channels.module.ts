import { Module } from '@nestjs/common';
import { DiscordChannelsService } from './channels.service';
import { DiscordChannelsController } from './channels.controller';
import { PrismaModule } from '../../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DiscordChannelsController],
  providers: [DiscordChannelsService],
})
export class DiscordChannelsModule { }
