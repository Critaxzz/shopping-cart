import { SignupService } from './../../services/signup.service';
import { ProductService } from './../../services/product.service';
import { Component, Input, OnInit } from '@angular/core';   

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit { 
  list:any 

  constructor(private product:ProductService,private service:SignupService) { }

  ngOnInit(): void { 
    this.product.getData().subscribe((x)=>{
      this.list=x;
    })
  } 
  addCart(item:[]){
    console.log("added to cart",item)
    this.service.addtoCart(item)
  }


}
