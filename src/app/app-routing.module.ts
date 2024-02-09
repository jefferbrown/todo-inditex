import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AppComponent } from './ui/layout/app.component'; 
import { AddTodoComponent } from './ui/todo/components/add-todo/add-todo.component'; 
import { DetailTodoComponent } from './ui/todo/components/detail-todo/detail-todo.component';
import { TodoComponent } from './ui/todo/pages/todo.component';


const enum PATH_TODO {
  HOME   = '',
  ADD    = 'add',
  DETAIL = 'list/:id',
}

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: PATH_TODO.HOME, component: TodoComponent },
      { path: PATH_TODO.ADD, component: AddTodoComponent },
      { path: PATH_TODO.DETAIL, component: DetailTodoComponent }, 
      { path: '', pathMatch: 'full', redirectTo: PATH_TODO.HOME },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
