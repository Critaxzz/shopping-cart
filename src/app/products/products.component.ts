import { UserService } from './../user.service';
import { product, User } from './../register/user.model';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  list:any 

  

  constructor(private AuthService:AuthService,private service:UserService) { 
  }

  ngOnInit(): void {
    this.AuthService.getData().subscribe((x)=>{
      this.list=x;
    }); 
  }
  addCart(item:product){
    // if(this.service.ACCESS){
    //   console.log("added to cart",item)
    //       console.log(this.service.ACCESS)
    // } 
    console.log("cart...",item)
    this.service.addtoCart(item)

  }

}
