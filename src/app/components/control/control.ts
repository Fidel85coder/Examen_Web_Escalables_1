import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-control',
  imports: [ReactiveFormsModule],
  templateUrl: './control.html',
  styleUrl: './control.css',
})
export class Control {
  searchControl = new FormControl("");
  search = output<string>();

    public orderByNameClick = output<void>();
    public orderByIdClick = output<void>();
    public reverseClick = output<void>();



    public orderByName(): void {
      this.orderByNameClick.emit();
    }
    public orderById(): void {
      this.orderByIdClick.emit();
    }
    public reverse(): void {
      this.reverseClick.emit();
    }

    public onSearch(): void {
      this.search.emit(this.searchControl.value ?? "");
    }
}
