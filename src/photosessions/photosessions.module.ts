import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { PhotosessionsController } from './photosessions.controller';
import { PhotosessionsService } from './photosessions.service';

@Module({
    controllers: [PhotosessionsController], 
    providers: [PhotosessionsService],
    imports: [DatasourceModule],
})
export class PhotosessionsModule {}
