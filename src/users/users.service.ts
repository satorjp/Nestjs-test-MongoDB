import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterDto } from './dto/register.dto';
import { User, UserDocument } from './schemas/user.shema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ){}

  async create(registerDto:RegisterDto): Promise<User>{
    const newUser = new this.userModel(registerDto);
    return newUser.save()
  }

  async findByUsername(username:string){
    return this.userModel.findOne({ username }).exec();
  }
}
