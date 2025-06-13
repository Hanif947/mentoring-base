import { Component, inject } from '@angular/core';
import { TodosApiService } from '../todos-api.service';
import { Todo } from '../todo.interface';
import { NgFor } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [ NgFor, TodoCardComponent],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService)
  todos: Todo[] = [];

  constructor() {
    this.todosApiService.getTodos().subscribe(
        (response: Todo[]) => {
            this.todos = response.slice(0, 10);
        }
    );
  };

  deleteTodo(id: number) {
      this.todos = this.todos.filter(
          todo => todo.id !== id);
  };

}
