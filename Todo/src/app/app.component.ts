import { Component } from '@angular/core';

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

  itemList = [{
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
  nbaList = [{
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

  clickCheck(item: any) {
    item.check = !item.check
  }
}
