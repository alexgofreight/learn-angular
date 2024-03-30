import { Component } from '@angular/core';
import { TodoItem } from './@models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Todo';
  placeholder = 'Please input some content'
  inputValue = 'Hello'

  toggleAll = false
  classUl = ''

  itemList: TodoItem[] = [{
    name: 'Bus',
    id: 1,
    check: false
  }, {
    name: 'Fly',
    id: 2,
    check: false
  }, {
    name: 'Car',
    id: 3,
    check: false
  }]

  // Test 2
  nbaList: TodoItem[] = [{
    name: 'Jordan',
    id: 1,
    check: false
  }, {
    name: 'Kobe',
    id: 2,
    check: true
  }, {
    name: 'James',
    id: 3,
    check: false
  }]

  xxx = true

  add(item: string) {
    const todo: TodoItem = {
      name: item,
      id: this.itemList.length,
      check: false
    }
    this.itemList.push(todo)
  }

  print(event: MouseEvent) {
    console.log(event)
  }

  doToggleAll() {
    this.toggleAll = !this.toggleAll;

    this.itemList.forEach((item)=>{
      item.check = this.toggleAll
    })

    if (this.toggleAll) {
      this.classUl = 'delete'
    } else {
      this.classUl = ''
    }
  }

  clickCheck(item: TodoItem) {
    item.check = !item.check
  }
}
