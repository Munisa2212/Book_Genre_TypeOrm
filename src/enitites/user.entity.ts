import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Book } from './book.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  password: string;

  @OneToMany(() => Book, (book) => book.user)
  books: Book[]
}

