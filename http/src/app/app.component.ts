import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todo, TodoBE } from './@models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.http.get<Todo[]>('assets/todo.json').subscribe(data=>{
      console.log(data)
    })
    this.http.get<TodoBE[]>('/api/todo2_16').subscribe(data=>{
      console.log(data)
    })
  }
}
