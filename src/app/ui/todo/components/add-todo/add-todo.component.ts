import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addTodo } from 'src/app/data/todo/use-cases/write/todo.actions';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTodoComponent {

  formTodo: FormGroup = this.fb.group({});

  constructor(
    private store : Store,
    private fb    : FormBuilder,
    private router: Router) {
    this.formTodo = this._createForm()
  }


  addTodo() {
    if (this.formTodo.valid) {
      this.store.dispatch(addTodo({ items: this.formTodo.value }))
      this.router.navigate(['']);
    }
  }

  private _createForm(): FormGroup {
    return new FormGroup({
      id: new FormControl(uuid(), [Validators.required]),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    })
  }
}
