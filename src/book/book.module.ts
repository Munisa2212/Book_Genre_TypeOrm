import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from 'src/enitites/book.entity';
import { Genre } from 'src/enitites/genre.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Genre])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
