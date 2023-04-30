import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { PhotosessionsController } from './photosessions.controller';
import { PhotosessionsService } from './photosessions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photographer } from 'src/photographers/photographer.entity';
import { Client } from 'src/clients/client.entity';

@Module({
    controllers: [PhotosessionsController], 
    providers: [PhotosessionsService],
    imports: [DatasourceModule,
    TypeOrmModule.forFeature([Photographer, Client])],
})
export class PhotosessionsModule {}
