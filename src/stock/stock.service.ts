import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStockItemDto } from 'src/stock/dto/create-stockitem.dto';

@Injectable()
export class StockService {
  constructor(private prisma: PrismaService) { }

  async create(createStockItemDto: CreateStockItemDto) {
    const { productId, content } = createStockItemDto;
    try {
      const stockItem = await this.prisma.stockItem.create({
        data: { product: { connect: { id: productId } }, content },
      });
      return stockItem;
    } catch {
      throw new BadRequestException();
    }
  }

  async getFirstStockItem(productId: number) {
    try {
      const stockItem = await this.prisma.stockItem.findFirst({
        where: { productId },
        include: { product: true },
      });
      return stockItem;
    } catch {
      throw new BadRequestException();
    }
  }

  async deleteOne(id: number) {
    try {
      return await this.prisma.stockItem.delete({
        where: { id },
      });
    } catch {
      throw new BadRequestException();
    }
  }

  async deleteMany(productId: number) {
    try {
      return await this.prisma.stockItem.deleteMany({
        where: { productId },
      });
    } catch {
      throw new BadRequestException();
    }
  }
}
