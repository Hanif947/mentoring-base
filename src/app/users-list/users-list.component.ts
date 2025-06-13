import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersApiService } from '../users-api.service';
import { UserCardComponent } from "./user-card/user-card.component";
import { User } from '../user.interface';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgFor, RouterModule, UserCardComponent ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {

  readonly usersApiService = inject(UsersApiService)
  users: User[] = [];

  constructor() {
    this.usersApiService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
      }
    );
  }

  deleteUser(id: number) {
    this.users = this.users.filter( 
      user => user.id !== id);
  }

}
