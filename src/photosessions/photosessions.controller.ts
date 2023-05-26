import { Body, Controller, Delete, Get, Param, Post, Put, UseFilters } from "@nestjs/common/decorators";
import { Photosession } from "./photosession.entity";
import { PhotosessionsService } from "./photosessions.service";
import { CreatePhotosessionDto } from "./dto/create-photosession.dto";
import { IncompletePhotosessionDto } from "./dto/incomplete-photosession.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { HttpExceptionFilter } from "./filters/HttpException.filter";

@Controller('photosessions')
@UseFilters(new HttpExceptionFilter)
@ApiTags('Фотосессии')
export class PhotosessionsController {
    constructor(private readonly photosessionService: PhotosessionsService) {}

    @ApiOperation({ summary: 'Создание фотосессии' }) 
    @Post()
    create(@Body() createPhotosessionDto: CreatePhotosessionDto): Promise<Photosession> {
      return this.photosessionService.createPhotosession(createPhotosessionDto);
    }
  
    @ApiOperation({ summary: 'Получение всех фотосессий' }) 
    @Get()
    findAll(): Promise<Photosession[]> {
      return this.photosessionService.findAllPhotosessions();
    }
  
    @ApiOperation({ summary: 'Получение неполной инф-ии о фотосессиях' }) 
    @Get('incomplete')
    findAllIncomplete(): Promise<IncompletePhotosessionDto[]> { 
      return this.photosessionService.findIncompletePhotosessions();
    }
  
    @ApiOperation({ summary: 'Получение фотосессии по id' }) 
    @Get(':id')
    getPhotosessionById(@Param('id') id: number): Promise<Photosession> {
      return this.photosessionService.getPhotosessionById(id);
    }
  
    @ApiOperation({ summary: 'Изменение фотосессии' }) 
    @Put(':id')
    updatePhotosession(@Param('id') id: number, @Body() updatePhotosession: Photosession): Promise<Photosession> {
      return this.photosessionService.updatePhotosession(id, updatePhotosession);
    }
  
    @ApiOperation({ summary: 'Удаление фотосессии' }) 
    @Delete(':id')
    deletePhotosession(@Param('id') id: number): Promise<void> {
      return this.photosessionService.deletePhotosession(id);
    }
}