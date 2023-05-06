import { Module } from '@nestjs/common';
import { PhotographersService } from './photographers.service';
import { PhotographersController } from './photographers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photographer } from './photographer.entity';
import { PhotographerRepository } from './photographer.repository';

@Module({
  controllers: [PhotographersController],
  providers: [PhotographersService],
  imports: [
  TypeOrmModule.forFeature([Photographer, PhotographerRepository])]
})
export class PhotographersModule {}
