import { CartService } from './../../services/cart.service';
import { ProductMen } from './../../model/men.model';
import { MenService } from './../../services/men.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-men',
  templateUrl: './products-men.component.html',
  styleUrls: ['./products-men.component.css']
})
export class ProductsMenComponent implements OnInit {

  viewMode = 'dress';

  dresses: ProductMen[] = [];
  grooms: ProductMen[] = [];
  foots: ProductMen[] = [];
  fashions: ProductMen[] = [];


  constructor(private productMen:MenService,private cartService :CartService) { }

  ngOnInit() {
    this.dresses = this.productMen.getDresses();
    this.grooms = this.productMen.getGrooms();
    this.foots = this.productMen.getFoots();
    this.fashions = this.productMen.getFashions()
  }

  addToCart() {

  }


}
