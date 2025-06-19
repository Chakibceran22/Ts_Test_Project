import { UpdateUserInput, CreateUserInput, User, UserResponse } from "../types/UserTypes";
import { Request, Response, NextFunction } from "express"; 
import { prisma } from "../lib/prisma";
import bcrypt from "bcryptjs"
class UserController {
    async regsiter (  req: Request<{}, {success: boolean, data?: UserResponse, message: string}, CreateUserInput>,
        res: Response<{ success: boolean, data?: UserResponse, message: string }>,
        next: NextFunction
    ):Promise<void> {
        try{
            const { name, email, password} = req.body;
            const existingUser = await prisma.user.findUnique({
                where :{ email}
            }) ;
            if (existingUser) {
                res.status(400).sendError("User already exists with this email");
                return;
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await prisma.user.create({
                data:{
                    name,
                    email,
                    password : hashedPassword
                }
            })

            const userResponse : UserResponse = {
                id: user.id,
                name: user.name,
                email:user.email,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            }

            res.status(201).send({ success: true , data: userResponse, message: "User created successfully" });
            return;
        }catch( err: any){
            next(err);
        }

    }
    
}