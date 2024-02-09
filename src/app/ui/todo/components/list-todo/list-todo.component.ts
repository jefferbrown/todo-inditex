import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { INITIAL_DATA } from 'src/app/data/__shared/__data/todo';
import { selectLoadingList, selectTodoList } from 'src/app/data/todo/use-cases/read/todo.selector';
import { removeByIdTodo } from 'src/app/data/todo/use-cases/write/todo.actions';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListTodoComponent {

  todo$: Observable<any> = this.store.select(selectTodoList)
  
  constructor(private store: Store) {}


  removeTodo(id: string) {
    this.store.dispatch(removeByIdTodo({ id: id }))
  }


}
