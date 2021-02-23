export interface User{
    id?:string;
    name?:string;
    email:string;
    phoneNumber?:string;
    password:string;
    cart?:[product]
}
export interface product{
    id:number
    name:string
    price:number
    path:string
    image:string
    image2:string
    quantity:number
    discription:string
}