import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { ApiQuery } from '@nestjs/swagger';

@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Post()
  create(@Body() createGenreDto: CreateGenreDto) {
    return this.genreService.create(createGenreDto);
  }

  @ApiQuery({
    name: "name",
    example: "apple",
    required: false
  })
  @ApiQuery({
    name: "limit",
    example: 5,
    default: 10,
    required: false
  })
  @ApiQuery({
    name: "page",
    example: 2,
    default: 1,
    required: false
  })
  @Get()
  findAll(@Query("name") name?, @Query("limit") limit = 10, @Query("page") page = 1) {
    return this.genreService.findAll(name, limit, page);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.genreService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGenreDto: UpdateGenreDto) {
    return this.genreService.update(+id, updateGenreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.genreService.remove(+id);
  }
}
