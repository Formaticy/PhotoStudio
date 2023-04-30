import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { Photographer } from './photographer.entity';
import { PhotographersService } from './photographers.service';

@Controller('photographers')
export class PhotographersController {
  constructor(private readonly photographersService: PhotographersService) {}

  @Post()
  create(@Body() createPhotographer: Photographer) {
    return this.photographersService.create(createPhotographer);
  }

  @Get()
  findAll() {
    return this.photographersService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.photographersService.findById(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePhotographer: Photographer) {
    return this.photographersService.update(+id, updatePhotographer);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.photographersService.remove(+id);
  }
}
