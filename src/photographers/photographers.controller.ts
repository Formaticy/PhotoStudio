import { Controller, Get, Post, Body, Param, Delete, Put, UseFilters } from '@nestjs/common';
import { Photographer } from './photographer.entity';
import { PhotographersService } from './photographers.service';
import { CreatePhotographerDto } from './dto/create-photographer.dto';
import { IncompletePhotographerDto } from './dto/incomplete-photographer.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from './filters/HttpException.filter';

@Controller('photographers')
@UseFilters(new HttpExceptionFilter)
@ApiTags('Фотографы')
export class PhotographersController {
  constructor(private readonly photographersService: PhotographersService) {}

  @ApiOperation({ summary: 'Создание фотографа' }) 
  @Post()
  create(@Body() createPhotographerDto: CreatePhotographerDto): Promise<Photographer> {
    return this.photographersService.createPhotographer(createPhotographerDto);
  }

  @ApiOperation({ summary: 'Получение всех фотографов' }) 
  @Get()
  findAll(): Promise<Photographer[]> {
    return this.photographersService.findAllPhotographers();
  }

  @ApiOperation({ summary: 'Получение неполной инф-ии о фотографах' }) 
  @Get('incomplete')
  findAllIncomplete(): Promise<IncompletePhotographerDto[]> { 
    return this.photographersService.findIncompletePhotographers();
  }

  @ApiOperation({ summary: 'Получение фотографа по id' }) 
  @Get(':id')
  getPhotographerById(@Param('id') id: number): Promise<Photographer> {
    return this.photographersService.getPhotographerById(id);
  }

  @ApiOperation({ summary: 'Изменение фотографа' }) 
  @Put(':id')
  updatePhotographer(@Param('id') id: number, @Body() updatePhotographer: Photographer): Promise<Photographer> {
    return this.photographersService.updatePhotographer(id, updatePhotographer);
  }

  @ApiOperation({ summary: 'Удаление фотографа' }) 
  @Delete(':id')
  deletePhotographer(@Param('id') id: number): Promise<void> {
    return this.photographersService.deletePhotographer(id);
  }
}
