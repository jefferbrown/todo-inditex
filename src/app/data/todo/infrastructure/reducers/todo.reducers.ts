import { createReducer, on } from "@ngrx/store";
import { ITodoModel, TodoState } from "../../domain/models/todo.model"; 
import { INITIAL_DATA } from "../../../__shared/__data/todo";
import { getByIdTodo, loadedTodos } from "../../use-cases/read/todo.actions";
import { addTodo, removeByIdTodo } from "../../use-cases/write/todo.actions";

export const initialState: TodoState = {   items: INITIAL_DATA, selectedItem: null }

export const todoReducer = createReducer(
    initialState, 
    on(loadedTodos, (state, { items }) => { return { ...state,   items: items } }),
    on(addTodo, (state, { items }) => { return { ...state,   items: [...state.items, items] } }),
    on(getByIdTodo, (state, { id }) => { 
        return {
          ...state,
          selectedItem: state.items.find((todoModel: ITodoModel) => todoModel.id === id) ?? null
        };
      }),
    on(removeByIdTodo, (state, { id }) => { 
        return {
          ...state,
          items: state.items.filter((todo:ITodoModel) => todo.id !== id)
        };
      }),
      )