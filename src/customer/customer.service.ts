import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CustomerModel } from './customer.model/customer.model';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  async getAllCustomers(): Promise<CustomerModel[]> {
    return await this.prisma.customer.findMany();
  }

  async getCustomerById(id: number): Promise<CustomerModel> {
    return await this.prisma.customer.findUnique({
      where: { id: id },
    });
  }

  async createCustomer(data: CustomerModel): Promise<CustomerModel> {
    return await this.prisma.customer.create({
      data,
    });
  }

  updateCustomer(id: number, data: CustomerModel): Promise<CustomerModel> {
    return this.prisma.customer.update({
      where: { id: id },
      data,
    });
  }

  deleteCustomer(id: number): Promise<CustomerModel> {
    return this.prisma.customer.delete({
      where: { id: id },
    });
  }
}
