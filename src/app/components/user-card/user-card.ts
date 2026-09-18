import { Component, input, output, signal, WritableSignal } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
  public user = input.required<User>();
  public eliminateClick = output<number>();

  public eliminateUser(): void {
    this.eliminateClick.emit(this.user().id);
  }
}
