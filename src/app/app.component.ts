import { Component } from '@angular/core';
import { Item } from './model/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'workshop31';

  // declare the variable to store the value after processing to be sent down to child
  selectedItems: Item[] = [];
  // establish receving pipe onItemReceived to receive from html in app.component.html where value is received from child
  onItemAddition(item: Item) {
    // logic processing and storing it in the variable to send to child
    if (this.selectedItems.includes(item)) {
      item.Quantity++;
    } else {
      item.Quantity++
      this.selectedItems.push(item);
    }   
  }

  
  onItemRemoved(item: Item) {
    if (item.Quantity > 1) {
      item.Quantity--;
    } else {
      // remove item from the array
      var index: number;
      index = this.selectedItems.indexOf(item);
      this.selectedItems.splice(index,1);
    }   
  }

}
