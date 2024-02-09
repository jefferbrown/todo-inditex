import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html', 
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent { }
