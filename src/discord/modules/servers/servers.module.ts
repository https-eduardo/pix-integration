import { Module } from '@nestjs/common';
import { DiscordServersService } from './servers.service';
import { DiscordServersController } from './servers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DiscordServersController],
  providers: [DiscordServersService],
})
export class DiscordServersModule { }
