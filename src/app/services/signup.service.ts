import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
  userList:any;
  access:boolean=false
  currentUser=[]

  constructor(private fire:AngularFirestore) { }

  saveUser(data:any){
    this.fire.collection("deo").add({...data})
    console.log("added",data)
  }
  readUser(){
    return this.fire.collection("deo").snapshotChanges()
  }
  addtoCart(item:[]){
    // this.fire.doc("proData/"+post.id).update({...post}) 

  }


  logincheck(e:string,p:string){
    for( let i of this.userList){
      if(i.email==e && i.password==p){  
         
        this.currentUser=i
        this.access=true 
      } 
    }  
    if(this.access!=true){
      console.log("wrong") 
      alert("check password and username")
    }
  }
}
