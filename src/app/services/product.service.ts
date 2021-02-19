import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore} from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private _http:HttpClient,private fire:AngularFirestore) { }
 

  getData(){
    return this._http.get("http://localhost:4200/assets/products.json")
  }
}
