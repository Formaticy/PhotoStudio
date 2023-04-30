import { Module } from '@nestjs/common';
import { PhotosessionsModule } from './photosessions/photosessions.module';
import { DatasourceModule } from './datasource/datasource.module';
import { PhotographersModule } from './photographers/photographers.module';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [PhotosessionsModule, DatasourceModule, PhotographersModule, ClientsModule],
  providers: [],
  controllers: [],
})
export class AppModule {}
