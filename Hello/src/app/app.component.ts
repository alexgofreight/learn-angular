import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Hello'
  fruits = ['apple', 'orange', 'banana']
  myModal: any

  ngOnInit(): void {
    this.myModal = new bootstrap.Modal('#exampleModal', {
      keyboard: false
    })
  }

  openModal(): void {
    this.myModal.show()
  }
}
