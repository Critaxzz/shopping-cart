import { User } from './../class/user.model';
import { AuthServiceService } from './../../service/auth-service.service';
import { ProductService } from './../../service/product.service'; 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  list:any 

  constructor(private productService:ProductService, private AuthService:AuthServiceService) { }

  ngOnInit(): void {
    this.AuthService.myId 
    this.productService.getData().subscribe((x)=>{
      this.list=x;
    });  

  } 



  addCart(item:any){ 
    // console.log(item)
    console.log(this.AuthService.myId)
    this.AuthService.addCart(item)
    
  }

}
