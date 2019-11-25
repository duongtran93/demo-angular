import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ProductService} from '../services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  addProductForm = this.fb.group({
    id: ['', [Validators.required, Validators.minLength(4)]],
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: ['', [Validators.required, Validators.minLength(4)]],
  });

  constructor(private fb: FormBuilder,
              private productService: ProductService,
              private route: Router) {
  }

  ngOnInit() {
  }

  submit() {
    const data = this.addProductForm.value;
    this.productService.add(data);
    return this.route.navigate(['/products']);
  }

  get id() {
    return this.addProductForm.get('id');
  }

  get name() {
    return this.addProductForm.get('name');
  }

  get price() {
    return this.addProductForm.get('price');
  }

}
