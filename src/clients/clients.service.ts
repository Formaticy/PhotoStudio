import { Injectable, NotFoundException } from '@nestjs/common';
import { Client } from './client.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientRepository } from './client.repository';
import { CreateClientDto } from './dto/create-client.dto';
import { IncompleteClientDto } from './dto/incomplete-client.dto';

@Injectable()
export class ClientsService {
    constructor(
      @InjectRepository(Client)
      private readonly clientRepository: ClientRepository
    ) {}

    async getClientById(id: number): Promise<Client> {
      const found = await this.clientRepository.findOne({
        where: { id },
        relations: { photosessions: true }
      });

      if (! found) {
        throw new NotFoundException(`Client with ID = ${id} not found`); 
      }

      return found;
    }

    async findAllClients(): Promise<Client[]> {
      const clients = await this.clientRepository.find({
        relations: { photosessions: true }
      })

      if (! clients) {
        throw new NotFoundException(`Clients are not found`); 
      }

      return clients;
    }

    async findIncompleteClients(): Promise<IncompleteClientDto[]> {
      const clients = await this.clientRepository.find();
      const incompleteClientsDto: IncompleteClientDto[] = clients.map((client) => {
        const incompleteClientDto = new IncompleteClientDto();
        incompleteClientDto.firstname = client.firstname;
        incompleteClientDto.lastname = client.lastname;
        incompleteClientDto.phone = client.phone;

        return incompleteClientDto;
      })

      return incompleteClientsDto;
    } 

    async createClient(createClientDto: CreateClientDto): Promise<Client> {
      const client = this.clientRepository.create();
      
      client.firstname = createClientDto.firstname;
      client.lastname = createClientDto.lastname;
      client.phone = createClientDto.phone;
      client.mail = createClientDto.mail;

      await this.clientRepository.save(client);
      return client;
    }  

    async updateClient(id: number, updatedClient: Client): Promise<Client> {
      const client = await this.getClientById(id);

      client.firstname = updatedClient.firstname;
      client.lastname = updatedClient.lastname;
      client.phone = updatedClient.phone;
      client.mail = updatedClient.mail;
      client.photosessions = updatedClient.photosessions;

      await this.clientRepository.save(client);
      return client;
    }

    async deleteClient(id: number): Promise<void> {
      const result = await this.clientRepository.delete(id);
      console.log(result);
    }
}
