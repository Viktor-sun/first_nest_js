import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [ProductModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
