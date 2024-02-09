export interface ITodoModel {
    id         : string,
    title      : string,
    description: string,

}

export interface TodoState { 
    items: ReadonlyArray<ITodoModel>
    selectedItem: ITodoModel | null
}