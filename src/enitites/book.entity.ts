
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne } from 'typeorm';
import { Genre } from './genre.entity';
import { User } from './user.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Genre, (genre) => genre.books)
  @JoinTable()
  genres: Genre[]

  @ManyToOne(() => User, (user) => user.books)
  user: User
}