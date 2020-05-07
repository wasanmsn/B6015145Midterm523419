import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators  } from '@angular/forms';
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  productForm = new FormGroup({
    type: new FormControl('',[Validators.required]),
    id: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required]),
    detail: new FormControl('',[Validators.required]),
    quantity: new FormControl(0,[Validators.required,Validators.max(50), Validators.min(1)]),
    price: new FormControl(0,[Validators.required,Validators.max(100000 ), Validators.min(1)])
  });

  productType: string[] = ['CPU','RAM','HDD','Mainboard'];
  get quantity() { return this.productForm.get('quantity')}
  get price() {return this.productForm.get('price')}
  get type() {return this.productForm.get('type')}
  get id() {return this.productForm.get('id')}
  get name() {return this.productForm.get('name')}
  get detail() {return this.productForm.get('detail')}
  get Products() {return this.productForm}
  
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }
  
  addProduct(){
    this.productService.addProduct(this.productForm)
    alert("Add product to database successfully")
  }

  getAllProduct(){
    return this.productService.getAllProduct()
  }
}
