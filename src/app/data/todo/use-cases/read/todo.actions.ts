import { createAction, props } from "@ngrx/store"
import { ITodoModel } from "../../domain/models/todo.model"
import { Actions } from "../../domain/constants/todo.constant"

export const loadedTodos = createAction(
    Actions.LOAD_TODO,
    props<{ items: ITodoModel[] }>()
)

export const getByIdTodo = createAction(
    Actions.GET_ID_TODO,
    props<{ id: string }>()
)
 
 