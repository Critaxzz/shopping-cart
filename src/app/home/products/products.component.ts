import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';   

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit { 
  lis:any
  productList=[{
    name:"name",
    rs:348724,
    "path":"../../assets/images/oneplus-7-pro.jpeg"
  } 
]

  constructor(private product:ProductService) { }

  ngOnInit(): void { 
    this.product.getData().subscribe((x)=>{
      this.lis=x;
    })
  } 
  addCart(i:any){
    console.log("added to cart",i)
  }


}
