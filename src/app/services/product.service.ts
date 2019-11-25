import {Injectable} from '@angular/core';
import {IProduct} from '../IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: IProduct[] = [
    {
      id: 1,
      name: 'iphone',
      image: 'assets/images/iphone.jpeg',
      price: 10000,
      star: 5
    },
    {
      id: 2,
      name: 'samsung',
      image: 'assets/images/samsung.jpeg',
      price: 7000,
      star: 4.5
    },
    {
      id: 3,
      name: 'xiaomi',
      image: 'assets/images/xiaomi.jpeg',
      price: 8000,
      star: 3
    },
    {
      id: 4,
      name: 'oppo',
      image: 'assets/images/oppo.jpeg',
      price: 55000,
      star: 1.5
    }
  ];

  constructor() {
  }

  getAll(): IProduct[] {
    return this.productList;
  }

  add(product: IProduct) {
    this.productList.push(product);
  }

  findById(id: number): IProduct {
    return this.productList[id];
  }

  delete(id: number) {
    this.productList.splice(id, 1);
  }

  update(product: IProduct, index: number) {
    this.productList[index] = product;
  }

  search(keyword): IProduct[] {
    return this.productList.filter(
      product => product.name.toLowerCase().indexOf(keyword) !== -1
    );
  }
}
