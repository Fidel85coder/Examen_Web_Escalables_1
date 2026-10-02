import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserCard } from '../../components/user-card/user-card';
import { Control } from '../../components/control/control';

@Component({
  selector: 'app-home-page',
  imports: [UserCard, Control],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  protected readonly title = signal('directorio');

  public users: WritableSignal<User[]> = signal<User[]>([
    {
      id: 1,
      name: 'Leanne Graham Third',
      username: 'LeGra',
      email: 'legra@gmail.com',
      image: 'https://i.pravatar.cc/150?img=1',
    },
    {
      id: 2,
      name: 'Carlos Mendoza',
      username: 'CarMen',
      email: 'cmendoza@yahoo.com',
      image: 'https://i.pravatar.cc/150?img=11',
    },
    {
      id: 3,
      name: 'Sofia Reyes',
      username: 'SofiR',
      email: 'sreyes@hotmail.com',
      image: 'https://i.pravatar.cc/150?img=5',
    },
    {
      id: 4,
      name: 'David Smith',
      username: 'DaveS',
      email: 'dsmith@gmail.com',
      image: 'https://i.pravatar.cc/150?img=12',
    },
    {
      id: 5,
      name: 'Lucía Fernández',
      username: 'LuFer',
      email: 'lucia.fer@empresa.com',
      image: 'https://i.pravatar.cc/150?img=9',
    },
    {
      id: 6,
      name: 'Mateo López',
      username: 'MattL',
      email: 'mlopez99@gmail.com',
      image: 'https://i.pravatar.cc/150?img=15',
    },
    {
      id: 7,
      name: 'Elena Martínez',
      username: 'EleMar',
      email: 'elena.martinez@outlook.com',
      image: 'https://i.pravatar.cc/150?img=20',
    },
  ]);

  public numUsers: Signal<number> = computed(() => this.users().length);

  public orderByName(): void {
    this.users.update((users) => users.sort((a, b) => a.name.localeCompare(b.name)));
  }
  public orderById(): void {
    this.users.update((users) => users.sort((a, b) => a.id - b.id));
  }
  public reverse(): void {
    this.users.update((users) => users.reverse());
  }
  public eliminateUser(id: number): void {
    this.users.update((users) => users.filter((user) => user.id !== id));
  }
  public search(value: string): void {
    console.log(value);
  }
}
