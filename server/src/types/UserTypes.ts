import { User, Prisma } from "../generated/prisma";

export {User};


export type CreateUserInput = {
    name: string;
    email: string;
    password: string;
}

export type UpdateUserInput = Partial<Pick<User, 'name' | 'email'>>

export type UserLoginInput = {
    email: string;
    password: string;
}

export type UserResponse = Omit<User, 'password'>;

export type UserwithTodos = Prisma.UserGetPayload<{
    include: {
        todos: true;
    };
}>