import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './ui/layout/app.component';
import { StoreModule } from '@ngrx/store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoComponent } from './ui/todo/pages/todo.component';
import { AddTodoComponent } from './ui/todo/components/add-todo/add-todo.component';
import { DetailTodoComponent } from './ui/todo/components/detail-todo/detail-todo.component'; 
import { ListTodoComponent } from './ui/todo/components/list-todo/list-todo.component';
 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ROOT_REDUCERS } from './data/__shared/__di/repository.interface';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ListTodoComponent,
    DetailTodoComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
