import { Prisma, Todo } from "../generated/prisma";
export {Todo};
export type TodoPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
export type CreateTodoInut = {
    title: string;
    description?: string;
    userId: string;
    priority?: TodoPriority;
    tags?: string[];
}
export type UpdateTodoInput = Partial<Pick<Todo, 'title' | 'description' | 'priority' | 'tags'>>;
export type TodoResponse = Omit<Todo, 'userId'>;

