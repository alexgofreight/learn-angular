import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  num = 0

  constructor() { }

  add() {
    this.num++
  }
}
