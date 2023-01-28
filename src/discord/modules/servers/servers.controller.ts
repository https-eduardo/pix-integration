import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
} from '@nestjs/common';
import { CreateServerDto } from './dto/create-server.dto';
import { FindServerByDiscordId, FindServerById } from './dto/find-server.dto';
import { UpdateServerDto } from './dto/update-server.dto';
import { DiscordServersService } from './servers.service';

@Controller('discord/servers')
export class DiscordServersController {
  constructor(private readonly service: DiscordServersService) { }

  @Post()
  async create(@Body() createServerDto: CreateServerDto) {
    return await this.service.create(createServerDto);
  }

  @Get(':id')
  async findOne(@Param() { id }: FindServerById) {
    return this.service.findOne(id);
  }

  @Get('/discord/:discordId')
  async findOneByDiscordId(@Param() { discordId }: FindServerByDiscordId) {
    return this.service.findOne(discordId);
  }

  @Patch(':id')
  async updateOne(
    @Param() { id }: FindServerById,
    @Body() updateServerDto: UpdateServerDto,
  ) {
    return await this.service.updateOne(id, updateServerDto);
  }

  @Delete(':id')
  async deleteOne(@Param() { id }: FindServerById) {
    return this.service.deleteOne(id);
  }
}
