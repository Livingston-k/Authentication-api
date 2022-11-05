import {object,string,TypeOf } from 'zod'

export const createUserSchema = object({
    body:object({
        firstName:string({
            required_error:"First name is required"
        }),
        lastName:string({
            required_error:"Last name is required"
        }),
        password:string({
            required_error: "password is required"
        }).min(6,"Password should be at least 6 characters"),

        passwordConfirmation:string ({
            required_error: "Password confirmation is required"
        }),
        email:string({
            required_error:"Email is required"
        }).email("Please provide a valid email")

    }).refine((data)=>data.password == data.passwordConfirmation)
}) 