import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { Client } from './client.entity';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  create(@Body() createClient: Client) {
    return this.clientsService.create(createClient);
  }

  @Get()
  findAll() {
    return this.clientsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.clientsService.findById(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateClient: Client) {
    return this.clientsService.update(+id, updateClient);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientsService.remove(+id);
  }
}
