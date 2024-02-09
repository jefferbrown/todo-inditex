import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ITodoModel } from 'src/app/data/todo/domain/models/todo.model';
import { getByIdTodo } from 'src/app/data/todo/use-cases/read/todo.actions';
import { selectTodoByID } from 'src/app/data/todo/use-cases/read/todo.selector';

@Component({
  selector: 'app-detail-todo',
  templateUrl: './detail-todo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailTodoComponent {
  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute) { }

  todoInfo$: Observable<ITodoModel | null> = this.store.select(selectTodoByID);

  ngOnInit() {

    const id = this.activatedRoute.snapshot.params['id'];
    this.store.dispatch(getByIdTodo({ id: id })) 
  }
}
