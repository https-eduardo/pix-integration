import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DiscordChannelsService } from './channels.service';
import { CreateChannelDto } from './dto/create-channel.dto';
import {
  FindChannelById,
  FindChannelByProductId,
} from './dto/find-channel.dto';

@Controller('discord/channels')
export class DiscordChannelsController {
  constructor(private readonly service: DiscordChannelsService) { }

  @Post()
  async create(@Body() createChannelDto: CreateChannelDto) {
    return await this.service.create(createChannelDto);
  }

  @Get(':id')
  async findOne(@Param() { id }: FindChannelById) {
    return await this.service.findOne(id);
  }

  @Get('product/:productId')
  async findOneByProductId(@Param() { productId }: FindChannelByProductId) {
    return await this.service.findOneByProductId(productId);
  }

  @Delete(':id')
  async deleteOne(@Param() { id }: FindChannelById) {
    return await this.service.deleteOne(id);
  }

  @Delete('product/:productId')
  async deleteOneByProductId(@Param() { productId }: FindChannelByProductId) {
    return await this.service.deleteOneByProductId(productId);
  }
}
