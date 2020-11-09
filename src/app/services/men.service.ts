import { ProductMen } from './../model/men.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenService {

  dresses : ProductMen[] = [
    new ProductMen
    ('md1', ' T-Shirt', 'Silk T-Shirts With Plain Colors', 799, '../assets/images/male/dress/d1.jpg'),
    new ProductMen
    ('md2', ' Plain-Shirt', 'Colored Shirt With Dots of Blue Color', 1289,'../assets/images/male/dress/d2.jpg'),
    new ProductMen
    ('md3', ' Checked-Shirt', 'Denim Cloth With Crimson & Black Color', 1799, '../assets/images/male/dress/d3.jpg'),
    new ProductMen
    ('md4', ' Torn Jeans', 'Denim With Black Color', 2599, '../assets/images/male/dress/d4.jpg'),
    new ProductMen
    ('md5', ' Denim Jeans', 'Denim With Light Blue Color', 1799, '../assets/images/male/dress/d5.jpeg'),
    new ProductMen
    ('md6', ' Slik Blazzer', 'Silk Cotton Blazzer With Blue Color', 4799, '../assets/images/male/dress/d6.jpg'),
  ];

  grooms : ProductMen[] = [
    new ProductMen
    ('mg1', ' Trimmer', 'Philips With 6 Blade', 999, '../assets/images/male/face/f1.jpg'),
    new ProductMen
    ('mg2', ' Beard Grow', 'Silk Cloth With Plain Color', 799,'../assets/images/male/face/f2.jpg'),
    new ProductMen
    ('mg3', ' Scent', 'Boss The Liquid Scent', 899,  '../assets/images/male/face/f3.jpg'),
    new ProductMen
    ('mg4', ' Perfume ', 'Brut Men Perfume', 599,  '../assets/images/male/face/f4.jpg'),
    new ProductMen
    ('mg5', ' Pocket Perfume', 'Hand Pocket Scent Base Light', 399, '../assets/images/male/face/f5.jpg'),
    new ProductMen
    ('mg6', ' Deodrant Men', 'Gas Deodrant ', 799, '../assets/images/male/face/f6.jpg'),
  ];

  foots : ProductMen[] = [
    new ProductMen
    ('mfo1', ' Sneakers', 'Nike Blue & White Combination Plain Colors', 699, '../assets/images/male/foot/fw1.jpg'),
    new ProductMen
    ('mfo2', ' Casual Shoe', 'Reebok Grey Color', 1399, '../assets/images/male/foot/fw2.jpg'),
    new ProductMen
    ('mfo3', ' Sandals', 'Belt Sandal', 999, '../assets/images/male/foot/fw3.png'),
    new ProductMen
    ('mfo4', ' Woodland', 'Shoes With Brown Color', 1999, '../assets/images/male/foot/fw4.jpg'),
    new ProductMen
    ('mfo5', ' Running Shoe', 'Nike Running Shoe Black and Gold Color', 2399, '../assets/images/male/foot/fw5.png'),
    new ProductMen
    ('mfo6', ' Sneakers Jeans', 'Roadstar Blue & White Combination Jeans Sneakers ', 1799, '../assets/images/male/foot/fw6.jpg'),
  ];

  fashions : ProductMen[] = [
    new ProductMen
    ('mfa1', ' Diesel', 'Leather Analog Watch', 1899,  '../assets/images/male/fashion/fa1.jpg'),
    new ProductMen
    ('mfa2', 'Leather Braclet', 'Leather Elastic Brown and Black Braclet', 299, '../assets/images/male/fashion/fa2.jpg'),
    new ProductMen
    ('mfa3', 'Okley', 'Black Goggles', 2299, '../assets/images/male/fashion/fa3.jpg'),
    new ProductMen
    ('mfa4', 'Belt', 'Leather Belt', 399, '../assets/images/male/fashion/fa4.jpg'),
    new ProductMen
    ('mfa5', 'Jeans Hat', 'Dusk Mutiple Colors Hat ', 999, '../assets/images/male/fashion/fa5.jpg'),
    new ProductMen
    ('mfa6', ' Face Cover Mask', 'Roadstar Face and Head Cover Mask', 599, '../assets/images/male/fashion/fa6.jpg'),
  ];


  constructor() { }

  getDresses() : ProductMen[] {
    return this.dresses;
  }
  getGrooms() : ProductMen[] {
    return this.grooms;
  }
  getFoots() : ProductMen[] {
    return this.foots;
  }
  getFashions() : ProductMen[] {
    return this.fashions;
  }



}
