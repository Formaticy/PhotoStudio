import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { Client } from './client.entity';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { IncompleteClientDto } from './dto/incomplete-client.dto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  create(@Body() createClientDto: CreateClientDto): Promise<Client> {
    return this.clientsService.createClient(createClientDto);
  }

  @Get()
  findAll(): Promise<Client[]> {
    return this.clientsService.findAllClients();
  }

  @Get('incomplete')
  findAllIncomplete(): Promise<IncompleteClientDto[]> {
    return this.clientsService.findIncompleteClients();
  }

  @Get(':id')
  getClientById(@Param('id') id: number): Promise<Client> {
    return this.clientsService.getClientById(id);
  }

  @Put(':id')
  updateClient(@Param('id') id: number, @Body() updateClient: Client): Promise<Client> {
    return this.clientsService.updateClient(id, updateClient);
  }

  @Delete(':id')
  deleteClient(@Param('id') id: number): Promise<void> {
    return this.clientsService.deleteClient(id);
  }
}
