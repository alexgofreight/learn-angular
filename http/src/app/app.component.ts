import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todo, TodoBE } from './@models/todo.model';
import { ExampleService } from './@services/example.service';
import { TodoApiService } from './@services/todo-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  inputValue = ""
  todoList: TodoBE[] = []

  constructor(
    private http: HttpClient,
    private exampleService: ExampleService,
    private apiService: TodoApiService
  ) {

  }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.apiService.getTodo().subscribe(data=>{
      this.todoList = data
    })
  }

  add() {
    const todo: TodoBE = {
      Editing: false,
      Thing: this.inputValue,
      Status: false,
      TodoId: ''
    }
    this.apiService.addTodo(todo).subscribe((data)=>{
      this.todoList.push(data)  // 需跟後端溝通好
    })
    // this.getData 會需要多一隻 API 取
    this.inputValue = ''
  }

  update(todo: TodoBE) {
    this.apiService.updateTodo(todo.TodoId, todo).subscribe()
    todo.Editing = false
  }

  delete(todo: TodoBE) {
    this.apiService.deleteTodo(todo.TodoId).subscribe()
    this.todoList = this.todoList.filter(item=>item.TodoId !== todo.TodoId)
  }
}
