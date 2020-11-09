import { ProductMen } from './../model/men.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems = [
    {image:'../assets/images/female/dress/d2.jpg',name:"Kurta",qty:2,price:989},
    {image:'../assets/images/female/foot/ft5.jpg',name:"Leather Jeans Sandals",qty:1,price:1399},
    {image:'../assets/images/male/face/f5.jpg',name:"Pocket Perfume",qty:3,price:399},
    {image:'../assets/images/male/fashion/fa5.jpg',name:"Jeans Hat ",qty:1,price:999},
    {image:'../assets/images/male/dress/d1.jpg',name:"T-Shirt",qty:2,price:799},
  ];

  cartTotal = 0;

  dress:ProductMen
  constructor() { }

  ngOnInit() {
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
      console.log(this.cartTotal)
    })
  }

  delete(del){
    this.cartItems.splice(del,1)
  }

}
