import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoState } from "../../domain/models/todo.model";

export const selectFeature = (state: any):TodoState => state.items

export const selectTodoList = createSelector(
    selectFeature,
    (state: TodoState) => state.items)

export const selectLoadingList = createSelector(
    selectFeature,
    (state: any):boolean => state.loading)

export const selectTodoByID = createSelector(
    selectFeature,
    (state: TodoState) => state.selectedItem)