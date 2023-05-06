import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common/decorators";
import { Photosession } from "./photosession.entity";
import { PhotosessionsService } from "./photosessions.service";
import { CreatePhotosessionDto } from "./dto/create-photosession.dto";
import { IncompletePhotosessionDto } from "./dto/incomplete-photosession.dto";

@Controller('photosessions')
export class PhotosessionsController {
    constructor(private readonly photosessionService: PhotosessionsService) {}

    @Post()
    create(@Body() createPhotosessionDto: CreatePhotosessionDto): Promise<Photosession> {
      return this.photosessionService.createPhotosession(createPhotosessionDto);
    }
  
    @Get()
    findAll(): Promise<Photosession[]> {
      return this.photosessionService.findAllPhotosessions();
    }
  
    @Get('incomplete')
    findAllIncomplete(): Promise<IncompletePhotosessionDto[]> { 
      return this.photosessionService.findIncompletePhotosessions();
    }
  
    @Get(':id')
    getPhotosessionById(@Param('id') id: number): Promise<Photosession> {
      return this.photosessionService.getPhotosessionById(id);
    }
  
    @Put(':id')
    updatePhotosession(@Param('id') id: number, @Body() updatePhotosession: Photosession): Promise<Photosession> {
      return this.photosessionService.updatePhotosession(id, updatePhotosession);
    }
  
    @Delete(':id')
    deletePhotosession(@Param('id') id: number): Promise<void> {
      return this.photosessionService.deletePhotosession(id);
    }
}