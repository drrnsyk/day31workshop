import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../model/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  // declare input pipe to receive from parent app.component
  @Input() selectedItems: Item[] = [];

  // decalre output pipe to send item to be deleted to parent for logic processing
  @Output() newItemRemovedEvent = new EventEmitter<Item>();
  RemoveFromCart(value: Item) {
    this.newItemRemovedEvent.emit(value);
  }

}
