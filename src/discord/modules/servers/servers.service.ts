import { Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { randomUUID } from 'crypto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateServerDto } from './dto/create-server.dto';
import { UpdateServerDto } from './dto/update-server.dto';

@Injectable()
export class DiscordServersService {
  constructor(private prisma: PrismaService) { }

  async create(createServerDto: CreateServerDto) {
    const license = randomUUID();
    try {
      return await this.prisma.discordServer.create({
        data: { ...createServerDto, license },
      });
    } catch {
      throw new BadRequestException();
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.discordServer.findUnique({ where: { id } });
    } catch {
      throw new BadRequestException();
    }
  }

  async findOneByDiscordId(discordId: number) {
    try {
      return await this.prisma.discordServer.findUnique({
        where: { discordId },
      });
    } catch {
      throw new BadRequestException();
    }
  }

  async updateOne(id: number, updateServerDto: UpdateServerDto) {
    try {
      return await this.prisma.discordServer.update({
        where: { id },
        data: { ...updateServerDto },
      });
    } catch {
      throw new BadRequestException();
    }
  }

  async deleteOne(id: number) {
    try {
      return await this.prisma.discordServer.delete({
        where: { id },
      });
    } catch {
      throw new BadRequestException();
    }
  }
}
