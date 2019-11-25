import {Component, OnInit} from '@angular/core';
import {IProduct} from '../IProduct';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productFilter: IProduct[] = [];
  keyword: string;
  widthImage = 150;
  show = true;
  message: string;

  constructor(private productService: ProductService) {
  }

  showHide(): void {
    this.show = !this.show;
  }

  delete(index): void {
    this.productService.delete(index);
  }

  showMessage(event): void {
    this.message = event;
  }

  search(event) {
    this.keyword = event.target.value;
    this.productFilter = (this.keyword) ? this.productService.search(this.keyword) : this.productService.getAll();
  }

  ngOnInit() {
    this.productFilter = this.productService.getAll();
  }

}
