import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TodosListComponent } from './todos-list/todos-list.component';

export const routes: Routes = [
    {
        path: 'users',
        component: UsersListComponent
    },
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'todos',
        component: TodosListComponent
    },
];
