import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { FindProductByIdDto } from 'src/products/dto/find-product.dto';
import { CreateStockItemDto } from './dto/create-stockitem.dto';
import { FindStockByIdDto } from './dto/find-stockitem.dto';
import { StockService } from './stock.service';

@Controller('stock')
export class StockController {
  constructor(private readonly service: StockService) { }

  @Post()
  async create(@Body() createStockItemDto: CreateStockItemDto) {
    return await this.service.create(createStockItemDto);
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
