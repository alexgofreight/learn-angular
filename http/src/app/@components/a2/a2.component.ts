import { Component } from '@angular/core';
import { ExampleService } from '../../@services/example.service';

@Component({
  selector: 'app-a2',
  templateUrl: './a2.component.html',
  styleUrl: './a2.component.css'
})
export class A2Component {
  get num() {
    return this.service.num
  }

  constructor(private service: ExampleService){}

  add() {
    this.service.add()
  }
}
