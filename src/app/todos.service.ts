import { Injectable } from "@angular/core";
import { Todo } from "./todo.interface";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })

export class TodosServise {

    todosSubject$ = new BehaviorSubject<Todo[]>([]);
    todos$ = this.todosSubject$.asObservable();

    setTodos(todos: Todo[]) {
        this.todosSubject$.next(todos)
    };

    editTodos(editTodos: Todo) {
        this.todosSubject$.next(
            this.todosSubject$.value.map(
                todo => todo.id === editTodos.id ? editTodos : todo
            )
        )
    };

    createTodos(todo: Todo) {
        this.todosSubject$.next(
            [ ...this.todosSubject$.value, todo ]
        )
    };

    deleteTodos(id: number) {
        this.todosSubject$.next(
            this.todosSubject$.value.filter(
                todo => id === todo.id ? false : true
            )
        )
    };
}

