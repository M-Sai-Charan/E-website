import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MenService } from './men.service';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  subject = new Subject()
  constructor(private menService:MenService) { }

  create(){
    return this.menService.getDresses()
  }

}
