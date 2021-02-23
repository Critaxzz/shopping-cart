import { User, product } from './register/user.model';
import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection ,AngularFirestoreDocument} 
from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class UserService { 

  userList:any=[]
  ACCESS?:boolean
  CurrentUser?:User
 
  constructor(public afs:AngularFirestore, private firebaseAuth: AngularFireAuth) {}

  getUser(){
   return this.afs.collection('users').snapshotChanges(); 
  }

  register(data:User){
    this.afs.collection("users").add({...data});


    this.firebaseAuth
      .createUserWithEmailAndPassword(data.email,data.password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });

  }
  login(data:User) { 
    this.firebaseAuth
      .signInWithEmailAndPassword(data.email,data.password)
      .then(value => {
        this.ACCESS=true
        
        console.log('Nice, it worked!',this.ACCESS); 


      })
      .catch(err => {
        this.ACCESS=false
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    this.firebaseAuth.signOut();
  }
  addtoCart(item:product){
     console.log(item)
     
    console.log(this.CurrentUser)
 

  

  //   updateEmployee(employee: Employee) {
  //     // convert object of type Employee to JSON object
  //     // because Firestore understand JSON
  //     
  //     this.firestore.doc('Employees/' + employee.id).update(employeeObject);
  //   }
  }

}
