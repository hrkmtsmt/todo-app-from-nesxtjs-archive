import { TodoList } from '@src/components/TodoList';

type UUID = string;

export type Todo = {
  id: UUID;
  todoTitle: string;
  todoDetail: string;
  isChecked: boolean;
};

export type PostTodo = Omit<Todo, 'id'>;

export type PatchTodo = Omit<Todo, 'id' | 'isChecked'>;

export type AllTodos = Array<Todo>;

export type State = {
  allTodos: Array<Todo>;
  editTodo: Todo;
};
