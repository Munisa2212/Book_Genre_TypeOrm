import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Genre } from 'src/enitites/genre.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GenreService {

  constructor(@InjectRepository(Genre) private genre: Repository<Genre>){}

  create(data: CreateGenreDto) {
    const one = this.genre.create(data)
    return this.genre.save(one);
  }

  async findAll() {
    const one = await this.genre.find()
    return one;
  }

  async findOne(id: number) {
    const one = await this.genre.findBy({id})
    return one;
  }

  async update(id: number, data: UpdateGenreDto) {
    const one = await this.genre.update(id, data)
    const found = await this.findOne(id)
    return found;
  }

  async remove(id: number) {
    const found = await this.findOne(id)
    await this.genre.delete(id)
    return found;
  }
}
