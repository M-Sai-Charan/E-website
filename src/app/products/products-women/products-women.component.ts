import { WomenService } from './../../services/women.service';
import { ProductWomen } from './../../model/women.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-women',
  templateUrl: './products-women.component.html',
  styleUrls: ['./products-women.component.css']
})
export class ProductsWomenComponent implements OnInit {

  viewMode = 'dress';
  dresses: ProductWomen[] = [];
  grooms: ProductWomen[] = [];
  foots: ProductWomen[] = [];
  fashions: ProductWomen[] = [];

  constructor(private productWomen:WomenService) { }

  ngOnInit() {
    this.dresses = this.productWomen.getDresses();
    this.grooms = this.productWomen.getGrooms();
    this.foots = this.productWomen.getFoots();
    this.fashions = this.productWomen.getFashions()
  }

  addToCart() {

  }

}
