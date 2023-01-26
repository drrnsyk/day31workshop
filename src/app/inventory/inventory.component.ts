import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../model/item';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {

  items : Item[] = [];
  constructor() {
    this.items = [
      {
        Image: 'acorn_squash.png',
        Description: 'Acorn',
        Quantity: 0
      },{
        Image: 'apple.png',
        Description: 'Apple',
        Quantity: 0
      },{
        Image: 'bell_pepper.png',
        Description: 'Bell Pepper',
        Quantity: 0
      },{
        Image: 'blueberries.png',
        Description: 'Blueberries',
        Quantity: 0
      },{
        Image: 'broccoli.png',
        Description: 'Broccoli',
        Quantity: 0
      },{
        Image: 'carrot.png',
        Description: 'Carrot',
        Quantity: 0
      },{
        Image: 'celery.png',
        Description: 'Celery',
        Quantity: 0
      },{
        Image: 'chili_pepper.png',
        Description: 'Chili Pepper',
        Quantity: 0
      },{
        Image: 'corn.png',
        Description: 'Corn',
        Quantity: 0
      },{
        Image: 'eggplant.png',
        Description: 'Eggplant',
        Quantity: 0
      }
    ]
  }

  // establish output pipe from child to parent
  @Output() newItemEvent = new EventEmitter<Item>();
  // function to take in the item from html and bind it to newItemEvent for output
  // emits the value to the pipe and send it up to parent
  AddToCart(value: Item) {
    this.newItemEvent.emit(value);
  }


}
