import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
  HttpCode,
  Delete,
  Put,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerModel } from './customer.model/customer.model';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  async getAllCustomers(): Promise<CustomerModel[]> {
    return this.customerService.getAllCustomers();
  }

  @Get(':customerId')
  async getCustomer(
    @Param('customerId') customerId: string,
  ): Promise<CustomerModel> {
    return this.customerService.getCustomerById(Number(customerId));
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(201)
  @Post()
  async createCustomer(
    @Body() customer: CustomerModel,
  ): Promise<CustomerModel> {
    return this.customerService.createCustomer(customer);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':customerId')
  async updateCustomer(
    @Param('customerId') customerId: string,
    @Body() customer: CustomerModel,
  ): Promise<CustomerModel> {
    return this.customerService.updateCustomer(Number(customerId), customer);
  }

  @HttpCode(204)
  @Delete(':customerId')
  async deleteCustomer(
    @Param('customerId') customerId: string,
  ): Promise<CustomerModel> {
    return this.customerService.deleteCustomer(Number(customerId));
  }
}
