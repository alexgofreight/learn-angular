import { Injectable } from '@angular/core';
import { TodoBE } from '../@models/todo.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {
  private url = '/api/todo2_16'

  constructor(private http: HttpClient) { }

  getTodo() {
    return this.http.get<TodoBE[]>(this.url)
  }

  addTodo(todo: TodoBE) {
    return this.http.post<TodoBE>(this.url, todo)
  }

  updateTodo(id: string, todo: TodoBE) {
    return this.http.put(`${this.url}/${id}`, todo)
  }

  deleteTodo(id: string) {
    return this.http.delete(`${this.url}/${id}`)
  }
}
