import { ProductWomen } from './../model/women.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WomenService {

  dresses : ProductWomen[] = [
    new ProductWomen
    ('wd1', ' Chudidar', 'Silk Chudidar With Green Peacock Colors', 1799, '../assets/images/female/dress/d1.jpg'),
    new ProductWomen
    ('wd2', ' kurta', 'Colored Kurts With Dots of White and Grey Color', 989,'../assets/images/female/dress/d2.jpg'),
    new ProductWomen
    ('wd3', ' T-Shirt', 'Denim Cloth With YellowOrange & Black Color', 1799, '../assets/images/female/dress/d3.jpg'),
    new ProductWomen
    ('wd4', ' Checked Shirt', 'Denim Checked Shirt With Light Blue and Black Color', 899, '../assets/images/female/dress/d4.jpg'),
    new ProductWomen
    ('wd5', ' leangi', 'Multi Clothed Leangi with Silver Gold Color', 2799, '../assets/images/female/dress/d5.jpg'),
    new ProductWomen
    ('wd6', ' Top Kurta', 'Printed Cotton Top Kurta With Blue Color', 1299, '../assets/images/female/dress/d6.png'),
  ];

  grooms : ProductWomen[] = [
    new ProductWomen
    ('wg1', ' Perfume', 'Brut Women Perfume', 799, '../assets/images/female/face/f1.jpg'),
    new ProductWomen
    ('wg2', ' Makeup Kit', 'Multi Items of Makeup Kit', 1799,'../assets/images/female/face/f2.jpg'),
    new ProductWomen
    ('wg3', ' Face Cream', 'Nivea Face Cream', 599,  '../assets/images/female/face/f3.jpg'),
    new ProductWomen
    ('wg4', ' Eye Liner ', 'Black Lash Eye Liner ', 299,  '../assets/images/female/face/f4.jpg'),
    new ProductWomen
    ('wg5', ' Lipstick', 'Red Palette Lipstick', 399, '../assets/images/female/face/f5.jpg'),
    new ProductWomen
    ('wg6', ' Nail-Polish', 'Mutli Colors of Nail-Polish', 799, '../assets/images/female/face/f6.jpg'),
  ];

  foots : ProductWomen[] = [
    new ProductWomen
    ('wfo1', ' Sandals', 'Belt Sandal with Gold & White Combination Plain Colors', 699, '../assets/images/female/foot/ft1.jpg'),
    new ProductWomen
    ('wfo2', ' Loafers', 'Loafers Black Color', 499, '../assets/images/female/foot/ft2.jpg'),
    new ProductWomen
    ('wfo3', ' Slippers', 'Plain Slippers', 399, '../assets/images/female/foot/ft3.jpg'),
    new ProductWomen
    ('wfo4', ' Design Slippers', 'Design Slippers With Black Color', 999, '../assets/images/female/foot/ft4.jpg'),
    new ProductWomen
    ('wfo5', ' Leather Jeans Sandals', 'Checked Jeans Sandals Black and White Color', 1399, '../assets/images/female/foot/ft5.jpg'),
    new ProductWomen
    ('wfo6', ' Sneakers', 'Roadstar White Combination Jeans Sneakers ', 1799, '../assets/images/female/foot/ft6.jpg'),
  ];

  fashions : ProductWomen[] = [
    new ProductWomen
    ('wfa1', ' Black Watch', 'Leather Analog Watch', 799,  '../assets/images/female/fashion/fa1.jpg'),
    new ProductWomen
    ('wfa2', 'Belt', 'Leather Belt', 399, '../assets/images/female/fashion/fa2.jpg'),
    new ProductWomen
    ('wfa3', 'Ragi Braclet', 'Gold Plate  Ragi and Black Braclet', 899, '../assets/images/female/fashion/fa3.jpg'),
    new ProductWomen
    ('wfa4', 'Hoddie Face MASK', 'Roadstar Face and Head Cover Mask', 1399, '../assets/images/female/fashion/fa4.png'),
    new ProductWomen
    ('wfa5', 'Dusk Head Band', 'Dusk Mutiple Head Band ', 999, '../assets/images/female/fashion/fa5.jpg'),
    new ProductWomen
    ('wfa6', 'Hand Gloves', 'Roadstar Head Gloves', 599, '../assets/images/female/fashion/fa6.jpg'),
  ];


  constructor() { }

  getDresses() : ProductWomen[] {
    return this.dresses;
  }
  getGrooms() : ProductWomen[] {
    return this.grooms;
  }
  getFoots() : ProductWomen[] {
    return this.foots;
  }
  getFashions() : ProductWomen[] {
    return this.fashions;
  }
}
