
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Book } from './book.entity';

@Entity()
export class Genre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Book, (book) => book.genres)
  books: Book[]
}

