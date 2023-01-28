import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateChannelDto } from './dto/create-channel.dto';

@Injectable()
export class DiscordChannelsService {
  constructor(private prisma: PrismaService) { }

  async create(createChannelDto: CreateChannelDto) {
    try {
      return await this.prisma.channel.create({ data: createChannelDto });
    } catch {
      throw new BadRequestException();
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.channel.findUnique({ where: { id } });
    } catch {
      throw new BadRequestException();
    }
  }

  async findOneByProductId(productId: number) {
    try {
      return await this.prisma.channel.findUnique({ where: { productId } });
    } catch {
      throw new BadRequestException();
    }
  }

  async deleteOne(id: number) {
    try {
      return await this.prisma.channel.delete({ where: { id } });
    } catch {
      throw new BadRequestException();
    }
  }

  async deleteOneByProductId(productId: number) {
    try {
      return await this.prisma.channel.delete({ where: { productId } });
    } catch {
      throw new BadRequestException();
    }
  }
}
