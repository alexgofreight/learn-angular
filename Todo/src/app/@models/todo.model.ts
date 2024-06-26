export interface TodoItem {
  name: string;
  id: number;
  check: boolean;
  editing: boolean;
}

export enum TodoStatusType {
  All,
  Active,
  Completed
}