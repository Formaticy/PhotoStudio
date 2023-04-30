import { Module } from '@nestjs/common';
import { PhotographersService } from './photographers.service';
import { PhotographersController } from './photographers.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photosession } from 'src/photosessions/photosession.entity';

@Module({
  controllers: [PhotographersController],
  providers: [PhotographersService],
  imports: [DatasourceModule,
  TypeOrmModule.forFeature([Photosession])]
})
export class PhotographersModule {}
