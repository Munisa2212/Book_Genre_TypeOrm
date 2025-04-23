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

  async findAll() {
    const one = await this.book.find({relations: ["genres", "user"]})
    return one;git remote add origin https://github.com/Munisa2212/Book_Genre_TypeOrm.git
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
