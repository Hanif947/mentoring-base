import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../todo.interface';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss'
})
export class TodoCardComponent {
  @Input()
  todo!: Todo;

  @Output()
  deleteTodo = new EventEmitter<number>()

  ondeleteTodo(todoId: number) {
    this.deleteTodo.emit(todoId)
  }

}
