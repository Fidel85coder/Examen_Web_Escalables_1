import { Injectable, signal, computed, WritableSignal, Signal } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userListSignal: WritableSignal<User[]> = signal<User[]>([
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
  public users: Signal<User[]> = this.userListSignal.asReadonly();
  public numUsers: Signal<number> = computed(() => this.userListSignal().length);

  public addUser(user: Omit<User, 'id'>): void {
    const newUser: User = {
      ...user,
      id: this.numUsers() + 1,
    };
    this.userListSignal.update((users) => [...users, newUser]);
  }

  public eliminateUser(id: number): void {
    this.userListSignal.update((users) => users.filter((user) => user.id !== id));
  }

  public orderByName(): void {
    this.userListSignal.update((users) => [...users].sort((a, b) => a.name.localeCompare(b.name)));
  }

  public orderById(): void {
    this.userListSignal.update((users) => [...users].sort((a, b) => a.id - b.id));
  }

  public reverse(): void {
    this.userListSignal.update((users) => [...users].reverse());
  }
}
