import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { Photographer } from './photographer.entity';
import { PhotographersService } from './photographers.service';
import { CreatePhotographerDto } from './dto/create-photographer.dto';
import { IncompletePhotographerDto } from './dto/incomplete-photographer.dto';

@Controller('photographers')
export class PhotographersController {
  constructor(private readonly photographersService: PhotographersService) {}

  @Post()
  create(@Body() createPhotographerDto: CreatePhotographerDto): Promise<Photographer> {
    return this.photographersService.createPhotographer(createPhotographerDto);
  }

  @Get()
  findAll(): Promise<Photographer[]> {
    return this.photographersService.findAllPhotographers();
  }

  @Get()
  findAllIncomplete(): Promise<IncompletePhotographerDto[]> { // не работает, тк выше есть другой гет запрос
    return this.photographersService.findIncompletePhotographers();
  }

  @Get(':id')
  getPhotographerById(@Param('id') id: number): Promise<Photographer> {
    return this.photographersService.getPhotographerById(id);
  }

  @Put(':id')
  updatePhotographer(@Param('id') id: number, @Body() updatePhotographer: Photographer): Promise<Photographer> {
    return this.photographersService.updatePhotographer(id, updatePhotographer);
  }

  @Delete(':id')
  deletePhotographer(@Param('id') id: number): Promise<void> {
    return this.photographersService.deletePhotographer(id);
  }
}
