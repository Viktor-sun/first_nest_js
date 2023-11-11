import { Prisma } from '@prisma/client';
import { IsNumber, IsString } from 'class-validator';

export class CustomerModel implements Prisma.CustomerCreateInput {
  id: number;

  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsString()
  city: string;
}
