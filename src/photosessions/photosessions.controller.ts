import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common/decorators";
import { Photosession } from "./photosession.entity";
import { PhotosessionsService } from "./photosessions.service";

@Controller('photosessions')
export class PhotosessionsController {
    constructor(private readonly photosessionsService: PhotosessionsService) {}

    @Get()
    findAll() {
        return this.photosessionsService.findAll()
    }

    @Get(':id') 
    findById(@Param('id') id: string) {
        return this.photosessionsService.findById(+id)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updatePhotosession: Photosession) {
        return this.photosessionsService.update(+id, updatePhotosession)
    }

    @Post()
    create(@Body() createPhotosession: Photosession) {
        return this.photosessionsService.create(createPhotosession)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.photosessionsService.remove(+id)
    }

}