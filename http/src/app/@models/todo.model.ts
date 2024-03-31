export interface Todo {
  name: string,
  status: boolean,
  editing: boolean
}

export interface TodoBE {
  Editing: boolean,
  TodoId: string,
  Thing: string,
  Status: boolean,
  CreateTime: string
}