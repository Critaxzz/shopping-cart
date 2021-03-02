import { User } from './../pages/class/user.model';
import { AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore , AngularFirestoreCollection ,AngularFirestoreDocument} 
from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';  

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  myId?:string
 

  constructor(private router:Router, private afa:AngularFireAuth,
    private afs:AngularFirestore) { 
      
    afa.setPersistence("session");
  }

  async login(email:string,password:string){
    return this.afa.signInWithEmailAndPassword(email,password)
  }

  logout(){
    return this.afa.signOut();
  }

  signUp(Name:string,Email:string,PhoneNumber:number,password:string){
    return this.afa.createUserWithEmailAndPassword(Email,password).then(result =>{
      const newUser:User = { 
        Name,
        Email,
        PhoneNumber,
        password,
        uid: result.user?.uid
      };
      this.setUserData(newUser)

    });

  }

  setUserData(user:User){ 
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    return userRef.set(user,{ merge: true });



    // console.log(user.uid) 
    // this.afs.collection("users").doc(user.uid).set(user) 
  }

  addCart(item:any){
    this.afs.collection(`users/${this.myId}/cart`).add({...item});
    // this.afs.collection("users").doc(this.myId).update(item)

    console.log(item)
  } 
 

  



}
