import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersApiService } from '../users-api.service';
import { UserCardComponent } from "./user-card/user-card.component";
import { User } from '../user.interface';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [ NgFor, RouterModule, UserCardComponent, AsyncPipe ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  
  readonly usersApiService = inject(UsersApiService);
  readonly usersService = inject(UsersService);

  constructor() {
    this.usersApiService.getUsers().subscribe(
      (response: User[]) => {
        this.usersService.setUsers(response)
      }
    );
  }

  deleteUser(id: number): void {
    this.usersService.deleteUser(id)
  }

}
