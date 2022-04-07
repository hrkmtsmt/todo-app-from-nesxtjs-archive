import { api } from '@src/api';
import { AllTodos, Todo, PostTodo, PatchTodo } from '@src/slices/types';

export const todosApi = {
  getAll: async () => {
    const result = await api.get<AllTodos>('/allTodos');
    return result;
  },
  get: async (id: string) => {
    const result = await api.get<Todo>(`/allTodos/${id}`);
    return result;
  },
  post: async (data: PostTodo) => {
    await api.post<Todo, PostTodo>(data, '/allTodos/');
  },
  patch: async (id: string, data: PostTodo) => {
    await api.patch<Todo, PatchTodo>(data, `/allTodos/${id}`);
  },
  delete: async (id: string) => {
    await api.delete<Todo>(`/allTodos/${id}`);
  },
};
