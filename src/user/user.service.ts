import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../enitites/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private user: Repository<User>){}

  create(data: CreateUserDto) {
    const one = this.user.create(data)
    return this.user.save(one);
  }

  async findAll() {
    const one = await this.user.find()
    return one;
  }

  async findOne(id: number) {
    const one = await this.user.findBy({id})
    return one;
  }

  async update(id: number, data: UpdateUserDto) {
    const one = await this.user.update(id, data)
    const findone = await this.findOne(id)
    return findone;
  }

  async remove(id: number) {
    const findone = await this.findOne(id)
    await this.user.delete(id)
    return findone;
  }
}
