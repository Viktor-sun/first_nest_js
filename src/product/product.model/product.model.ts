import { IsDate, IsNumber, IsString } from 'class-validator';

export class ProductModel {
  id: string;

  @IsString()
  name: string;

  @IsString()
  brand: string;

  @IsNumber()
  price: number;

  @IsString()
  type: string;

  @IsDate()
  createdAt: Date;
}
