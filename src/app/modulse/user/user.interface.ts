// import { Schema, model, connect } from 'mongoose'


export type UserName = {
  firstName: string
  lastName: string
}
 export  type Address={
    street: string
    city: string
    country: string
}
export type Order = {
  productName: string
  price: number
  quantity: number
} 





export type User = {
  model(arg0: string): unknown
  userId :number 
  username: string
  fullName: UserName
  age: number
  email: string
  isActive: boolean
  hobbies:string[]
  address: Address
  orders ?: Order[]
}