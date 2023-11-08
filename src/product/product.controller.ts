import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductModel } from './product.model/product.model';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get(':productId')
  async getProduct(@Param('productId') productId: string) {
    return this.productService.getProduct(productId);
  }

  @HttpCode(204)
  @Delete(':productId')
  async deleteProduct(@Param('productId') productId: string) {
    return this.productService.deleteProduct(productId);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(201)
  @Post()
  async createProduct(@Body() product: ProductModel) {
    return this.productService.createProduct(product);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Patch(':productId')
  async updateProduct(
    @Param('productId') productId: string,
    @Body() product: ProductModel,
  ) {
    return this.productService.updateProduct(productId, product);
  }
}
