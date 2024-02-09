import { ActionReducerMap } from "@ngrx/store"; 
import { todoReducer } from "src/app/data/todo/infrastructure/reducers/todo.reducers";
import { TodoState } from "src/app/data/todo/domain/models/todo.model";

export interface AppState {
    items: TodoState
}


export const ROOT_REDUCERS : ActionReducerMap<AppState> = {
    items:todoReducer
}