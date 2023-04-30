import { HttpStatus, Injectable } from '@nestjs/common';
import { DatasourceService } from 'src/datasource/datasource.service';
import { Client } from './client.entity';

@Injectable()
export class ClientsService {

  constructor(private readonly datasourceService: DatasourceService) {}

  create(client: Client) {
    this.datasourceService.getClients().push(client);
    return client;
  }

  findAll(): Client[] {
    return this.datasourceService.getClients();
  }

  findById(id: number) {
    return this.datasourceService.getClients().find(client => client.id == id);
  }

  update(id: number, updatedClient: Client) {
    const index = this.datasourceService
        .getClients()
        .findIndex(client => client.id == id);
    this.datasourceService.getClients() [index] = updatedClient;
    return this.datasourceService.getClients() [index];
  }

  remove(id: number) {
    const index = this.datasourceService
        .getClients()
        .findIndex(client => client.id == id);
    this.datasourceService.getClients().splice(index, 1);
    return HttpStatus.OK;
  }
}