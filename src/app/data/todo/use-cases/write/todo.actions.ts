import { createAction, props } from "@ngrx/store" 
import { ITodoModel } from "../../domain/models/todo.model"
import { Actions } from "../../domain/constants/todo.constant"
 
export const addTodo = createAction(
    Actions.ADD_TODO,
    props<{ items: ITodoModel }>()
)

export const removeByIdTodo = createAction(
    Actions.REMOVE_ID_TODO,
    props<{ id: string }>()
)