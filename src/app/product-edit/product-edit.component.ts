import {Component, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  updateProductForm: FormGroup;
  index = +this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private route: Router) {
  }

  submit() {
    this.productService.update(this.updateProductForm.value, this.index);
    return this.route.navigate(['/products']);
  }

  ngOnInit() {
    const product = this.productService.findById(this.index);
    this.updateProductForm = this.fb.group({
      id: [product.id, [Validators.required, Validators.minLength(4)]],
      name: [product.name, [Validators.required, Validators.minLength(4)]],
      price: [product.price, [Validators.required, Validators.minLength(4)]]
    });
  }

  get id() {
    return this.updateProductForm.get('id');
  }

  get name() {
    return this.updateProductForm.get('name');
  }

  get price() {
    return this.updateProductForm.get('price');
  }

}
