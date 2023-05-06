import { Module } from '@nestjs/common';
import { PhotosessionsController } from './photosessions.controller';
import { PhotosessionsService } from './photosessions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photosession } from './photosession.entity';
import { PhotographerRepository } from 'src/photographers/photographer.repository';

@Module({
    controllers: [PhotosessionsController], 
    providers: [PhotosessionsService],
    imports: [
    TypeOrmModule.forFeature([Photosession, PhotographerRepository])],
})
export class PhotosessionsModule {}
