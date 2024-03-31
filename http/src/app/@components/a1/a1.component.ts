import { Component } from '@angular/core';
import { ExampleService } from '../../@services/example.service';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrl: './a1.component.css'
})
export class A1Component {
  get num() {
    return this.service.num
  }

  constructor(private service: ExampleService){}

  add() {
    this.service.add()
  }
}
