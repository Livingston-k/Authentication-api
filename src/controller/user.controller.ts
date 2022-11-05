import { Request,Response } from "express";
import { CreateUserInput } from "../schema/user.schema";

export async function createUserHandler(req: Request<{}, {}, CreateUserInput>,res:Response){
    const body = req.body

} 