import { Component, signal, inject} from '@angular/core';
import { UserCard } from '../../components/user-card/user-card';
import { Control } from '../../components/control/control';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-home-page',
  imports: [UserCard, Control],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  protected title = signal('directory');

  private userService = inject(UserService);

  public users = this.userService.users;
  public numUsers = this.userService.numUsers;

  public orderByName(): void {
    this.userService.orderByName();
  }

  public orderById(): void {
    this.userService.orderById();
  }

  public reverse(): void {
    this.userService.reverse();
  }

  public eliminateUser(id: number): void {
    this.userService.eliminateUser(id);
  }

  public search(value: string): void {
    console.log(value);
  }
}
