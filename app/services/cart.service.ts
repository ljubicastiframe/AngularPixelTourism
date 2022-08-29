import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Putovanje } from '../putovanja';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Putovanje[] = [];
  public putovanja = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  constructor() { }

  addToCart(putovanje: Putovanje) {
    this.items.push(putovanje);
  }

  getItems() {
    return this.items;
  }

  itemsCount() {
    return this.items.length;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
