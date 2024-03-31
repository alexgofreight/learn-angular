import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todo, TodoBE } from './@models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  inputValue = ""
  todoList: TodoBE[] = []

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.http.get<TodoBE[]>('/api/todo2_16').subscribe(data=>{
      this.todoList = data
    })
  }

  add() {
    const todo: TodoBE = {
      Editing: false,
      Thing: this.inputValue,
      Status: false,
    }
    this.http.post<TodoBE>('/api/todo2_16', todo).subscribe((data)=>{
      this.todoList.push(data)  // 需跟後端溝通好
    })
    // this.getData 會需要多一隻 API 取
    this.inputValue = ''
  }
}
