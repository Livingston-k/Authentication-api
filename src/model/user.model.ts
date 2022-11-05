import {getModelForClass, modelOptions, prop, Severity} from '@typegoose/typegoose'
import { nanoid } from 'nanoid'

@modelOptions({
    schemaOptions:{
        timestamps:true
    },
    options:{
        allowMixed:Severity.ALLOW
    }

})
    

export class User{
    @prop({ lowercase: true, required: true, unique: true })
    email!: string

    @prop({required: true})
    firstName!: string

    @prop({required: true})
    lastName!: string

    @prop({required: true })
    password!: string

    @prop({required: true,default:()=>nanoid()})
    verificationCode!: string

    @prop()
    resetCode!: string

    @prop({default:false})
    verified!:boolean
}

const UserModel = getModelForClass(User)
export default UserModel