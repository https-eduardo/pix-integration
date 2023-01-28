import { Injectable } from '@nestjs/common';
import {
  BadRequestException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) { }

  async create(createProductDto: CreateProductDto) {
    try {
      return await this.prisma.product.create({
        data: { ...createProductDto },
      });
    } catch {
      throw new BadRequestException();
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.product.findUnique({
        where: { id },
        include: { stockItems: true },
      });
    } catch {
      throw new NotFoundException();
    }
  }

  async updateOne(id: number, updateProductDto: UpdateProductDto) {
    try {
      return await this.prisma.product.update({
        where: { id },
        data: updateProductDto,
      });
    } catch {
      throw new BadRequestException();
    }
  }

  async deleteOne(id: number) {
    try {
      return await this.prisma.product.delete({ where: { id } });
    } catch {
      throw new BadRequestException();
    }
  }
}
