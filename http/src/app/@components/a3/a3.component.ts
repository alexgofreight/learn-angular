import { Component } from '@angular/core';
import { ExampleService } from '../../@services/example.service';

@Component({
  selector: 'app-a3',
  templateUrl: './a3.component.html',
  styleUrl: './a3.component.css',
  providers: [ExampleService]
})
export class A3Component {
  get num() {
    return this.service.num
  }

  constructor(private service: ExampleService){}

  add() {
    this.service.add()
  }
}
