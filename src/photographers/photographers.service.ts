import { HttpStatus, Injectable } from '@nestjs/common';
import { DatasourceService } from 'src/datasource/datasource.service';
import { Photographer } from './photographer.entity';

@Injectable()
export class PhotographersService {

  constructor(private readonly datasourceService: DatasourceService) {}

  create(photographer: Photographer) {
    this.datasourceService.getPhotographers().push(photographer);
    return photographer;
  }

  findAll(): Photographer[] {
    return this.datasourceService.getPhotographers();
  }

  findById(id: number) {
    return this.datasourceService.getPhotographers().find(photographer => photographer.id == id);
  }

  update(id: number, updatedPhotographer: Photographer) {
    const index = this.datasourceService
        .getPhotographers()
        .findIndex(photographer => photographer.id == id);
    this.datasourceService.getPhotographers() [index] = updatedPhotographer;
    return this.datasourceService.getPhotographers() [index];
  }

  remove(id: number) {
    const index = this.datasourceService
        .getPhotographers()
        .findIndex(photographer => photographer.id == id);
    this.datasourceService.getPhotographers().splice(index, 1);
    return HttpStatus.OK;
  }
}
