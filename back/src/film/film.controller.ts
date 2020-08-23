import { Controller, Post, Body, Get, Logger, Param, Delete, Res, HttpStatus, HttpCode, Put, Req, Query, UseGuards } from '@nestjs/common';
import { FilmService } from './film.service';
import { Film } from './film.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ApiBearerAuth, ApiOkResponse, ApiConflictResponse, ApiNoContentResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { FilmDto } from './dto/film.dto';

@Controller('film')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Get()
  @ApiOkResponse({ description: 'Retrieved films.'})
  async list(@Query() query): Promise<Film[]> {

    const retrievedFilms:Film[] = await this.filmService.findAll(query.order);

    return retrievedFilms;

  }

  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({ description: 'Film created.'})
  @ApiConflictResponse({ description: 'Film already exists.'})
  async create(@Body() filmDto: FilmDto): Promise<Film> {

    const savedFilm: Film = await this.filmService.save(filmDto.toFilm());

    return savedFilm;
  }

  @Put(':id')
  @ApiOkResponse({ description: 'Film updated.'})
  async update(@Body() filmDto: FilmDto): Promise<Film> {

    const savedFilm: Film = await this.filmService.save(filmDto.toFilm());

    return savedFilm;
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiNoContentResponse({ description: 'Film deleted.'})
  async delete(@Param('id') id: number) {

    await this.filmService.delete(id);
  }

}