import { HttpStatus, Injectable } from '@nestjs/common';
import { DatasourceService } from 'src/datasource/datasource.service';
import { Photosession } from './photosession.entity';

@Injectable()
export class PhotosessionsService {

    constructor(private readonly datasourceService: DatasourceService) {}

    create(photosession: Photosession) {
        this.datasourceService.getPhotosessions().push(photosession);
        return photosession;
    }

    findById(id: number): Photosession {
        return this.datasourceService
            .getPhotosessions()
            .find(Photosession => Photosession.id == id)
    }

    findAll(): Photosession[] {
        return this.datasourceService.getPhotosessions()
    }

    update(id: number, updatedPhotosession: Photosession) {
        const index = this.datasourceService
            .getPhotosessions()
            .findIndex(photosession => photosession.id == id);
        this.datasourceService.getPhotosessions() [index] = updatedPhotosession;
        return this.datasourceService.getPhotosessions() [index];

    }

    remove(id: number) {
        const index = this.datasourceService
            .getPhotosessions()
            .findIndex(photosession => photosession.id == id);
        this.datasourceService.getPhotosessions().splice(index, 1);
        return HttpStatus.OK;
    }
}
