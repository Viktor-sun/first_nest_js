import { Injectable } from '@nestjs/common';
import { ProductModel } from './product.model/product.model';

const products: ProductModel[] = [
  {
    id: '1',
    name: 'First product',
    brand: 'LG',
    price: 100,
    type: 'appliances',
    createdAt: new Date(),
  },
  {
    id: '2',
    name: 'Second product',
    brand: 'Samsung',
    price: 200,
    type: 'appliances',
    createdAt: new Date(),
  },
];

@Injectable()
export class ProductService {
  getAllProducts(): ProductModel[] {
    return products;
  }

  getProduct(productId: string): ProductModel {
    return products.find((product) => product.id === productId);
  }

  createProduct(product: ProductModel): ProductModel {
    products.push(product);
    return product;
  }

  updateProduct(productId: string, product: ProductModel): ProductModel {
    const index = products.findIndex((product) => product.id === productId);
    products[index] = { ...products[index], ...product };
    return products[index];
  }

  deleteProduct(productId: string): ProductModel[] {
    const index = products.findIndex((product) => product.id === productId);
    products.splice(index, 1);
    return products;
  }
}
