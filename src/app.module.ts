import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './enitites/user.entity';
import { GenreModule } from './genre/genre.module';
import { Genre } from './enitites/genre.entity';
import { BookModule } from './book/book.module';
import { Book } from './enitites/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'new',
      entities: [User, Genre, Book],
      synchronize: true,
    }),
    UserModule,
    GenreModule,
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
