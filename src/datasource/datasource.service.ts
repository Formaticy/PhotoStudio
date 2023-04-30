import { Injectable } from '@nestjs/common';
import { Client } from 'src/clients/client.entity';
import { Photographer } from 'src/photographers/photographer.entity';
import { Photosession } from 'src/photosessions/photosession.entity';

@Injectable()
export class DatasourceService {
    private photosessions: Photosession[] = [];
    private photographers: Photographer[] = [];
    private clients: Client[] = [];

    getPhotosessions(): Photosession[] {
        return this.photosessions
    }

    getPhotographers(): Photographer[] {
        return this.photographers
    }

    getClients(): Client[] {
        return this.clients
    }
}
