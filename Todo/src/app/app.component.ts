import { Component } from '@angular/core';
import { TodoItem, TodoStatusType } from './@models/todo.model';

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

  currentTodoStatus = TodoStatusType.All
  TodoStatusType = TodoStatusType

  itemList: TodoItem[] = [{
    name: 'Bus',
    id: 1,
    check: false,
    editing: false
  }, {
    name: 'Fly',
    id: 2,
    check: false,
    editing: false
  }, {
    name: 'Car',
    id: 3,
    check: false,
    editing: false
  }]

  // Test 2
  nbaList: TodoItem[] = [{
    name: 'Jordan',
    id: 1,
    check: false,
    editing: false
  }, {
    name: 'Kobe',
    id: 2,
    check: true,
    editing: false
  }, {
    name: 'James',
    id: 3,
    check: false,
    editing: false
  }]

  add(input: string) {
    const todo: TodoItem = {
      name: input,
      id: this.itemList.length,
      check: false,
      editing: false
    }
    this.itemList.push(todo)
  }

  edit(item: TodoItem) {
    item.editing = true;
  }

  update(item: TodoItem, editValue: string) {
    item.name = editValue;
    item.editing = false;
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

  setTodoStatusType(type: number) {
    this.currentTodoStatus = type
  }

  get currentTodoListByStatus() {
    switch (this.currentTodoStatus) {
      case TodoStatusType.Active:
        return this.todoActive
      case TodoStatusType.Completed:
        return this.todoCompleted
      case TodoStatusType.All:
      default:
        return this.todoAll
    }
  }

  get todoAll() {
    return this.itemList
  }

  get todoActive() {
    return this.itemList.filter((item) => !item.check)
  }

  get todoCompleted() {
    return this.itemList.filter((item) => item.check)
  }
}
