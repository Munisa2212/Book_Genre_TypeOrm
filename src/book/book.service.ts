import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/enitites/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {

  constructor(@InjectRepository(Book) private book: Repository<Book>){}

  create(data: CreateBookDto) {
    const one = this.book.create({...data, genres: data.genres.map((id) => ({ id })), user: {id: data.user}})
    return this.book.save(one);
  }

  async findAll(name: string, limit: number, page: number) {

    const query: any = {};

    if (name) {
      query.name = name;
    }
  
    const skip = (page - 1) * limit;

    const one = await this.book.find({
      where: query,
      skip: skip,
      take: limit,
      relations: ["genres", "user"]
    })

    return one
  }

  async findOne(id: number) {
    const one = await this.book.findBy({id})
    return one;
  }

  async update(id: number, data: UpdateBookDto) {
    const one = await this.book.update(id, {...data, genres: data.genres?.map((id) => ({ id })), user: {id: data.user}})
    const found = await this.findOne(id)
    return found;
  }

  async remove(id: number) {
    const found = await this.findOne(id)
    await this.book.delete(id)
    return found;
  }
}
