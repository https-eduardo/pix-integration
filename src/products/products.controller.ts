import { Controller, Post } from '@nestjs/common';
import { Body, Delete, Get, Param, Put } from '@nestjs/common/decorators';
import { CreateProductDto } from './dto/create-product.dto';
import {
  FindProductByIdDto,
  FindProductsByDiscordIdDto,
} from './dto/find-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly service: ProductsService) { }

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return await this.service.create(createProductDto);
  }

  @Get(':id')
  async findOne(@Param() { id }: FindProductByIdDto) {
    return await this.service.findOne(id);
  }

  @Get('list/:discordId')
  async findByDiscordId(@Param() { discordId }: FindProductsByDiscordIdDto) {
    return await this.service.findByDiscordId(discordId);
  }

  @Put(':id')
  async updateOne(
    @Param() { id }: FindProductByIdDto,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return await this.service.updateOne(id, updateProductDto);
  }

  @Delete(':id')
  async deleteOne(@Param() { id }: FindProductByIdDto) {
    return await this.service.deleteOne(id);
  }
}
