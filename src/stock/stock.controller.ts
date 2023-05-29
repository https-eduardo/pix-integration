import {
  Body,
  Controller,
  Get,
  Delete,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FindProductByIdDto } from 'src/products/dto/find-product.dto';
import { CreateStockItemDto } from './dto/create-stock-item.dto';
import { FindStockByIdDto } from './dto/find-stock-item.dto';
import { StockService } from './stock.service';
import { UpdateStockItemDto } from './dto/update-stock-item.dto';

@Controller('stock')
export class StockController {
  constructor(private readonly service: StockService) {}

  @Post()
  async create(@Body() createStockItemDto: CreateStockItemDto) {
    return await this.service.create(createStockItemDto);
  }

  @Get(':id')
  async findOne(@Param() { id }: FindStockByIdDto) {
    return await this.service.findOne(id);
  }

  @Patch(':id')
  async updateOne(
    @Param() { id }: FindStockByIdDto,
    updateStockItemDto: UpdateStockItemDto,
  ) {
    return await this.service.updateOne(id, updateStockItemDto);
  }

  @Delete(':id')
  async deleteOne(@Param() { id }: FindStockByIdDto) {
    return await this.service.deleteOne(id);
  }

  @Delete('clear/:id')
  async clear(@Param() { id }: FindProductByIdDto) {
    return await this.service.deleteMany(id);
  }
}
