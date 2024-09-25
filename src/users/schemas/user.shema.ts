import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
    @Prop({ required: true, unique: true })
    username: string;

    @Prop({ required: true })
    password: string;

    @Prop()
    fristname: string;

    @Prop()
    lastname: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop()
    phone: string

    @Prop()
    address: string

    @Prop({ default: true })
    status: boolean

    @Prop()
    userimage: string
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
})