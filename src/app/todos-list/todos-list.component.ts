import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosApiService } from '../todos-api.service';
import { Todo } from '../todo.interface';
import { AsyncPipe, NgFor } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodosServise } from '../todos.service';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [ NgFor, TodoCardComponent, AsyncPipe ],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService);
  readonly todosService = inject(TodosServise);

  constructor() {
    this.todosApiService.getTodos().subscribe(
        (response: Todo[]) => {
            this.todosService.setTodos(response.slice(0, 10));
        }
    )
  };

  deleteTodo(id: number): void {
      this.todosService.deleteTodos(id)
  };

}
