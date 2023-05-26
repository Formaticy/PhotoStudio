import { Controller, Get, Post, Body, Param, Delete, Put, UsePipes, ValidationPipe, UseFilters } from '@nestjs/common';
import { Client } from './client.entity';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { IncompleteClientDto } from './dto/incomplete-client.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from './filters/HttpException.filter';

@Controller('clients')
@UseFilters(new HttpExceptionFilter)
@ApiTags('Клиенты')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @ApiOperation({ summary: 'Создание клиента' }) 
  @Post()
  create(@Body() createClientDto: CreateClientDto): Promise<Client> {
    return this.clientsService.createClient(createClientDto);
  }

  @ApiOperation({ summary: 'Получение всех клиентов' }) 
  @Get()
  findAll(): Promise<Client[]> {
    return this.clientsService.findAllClients();
  }

  @ApiOperation({ summary: 'Получение неполной инф-ии о клиентах' }) 
  @Get('incomplete')
  findAllIncomplete(): Promise<IncompleteClientDto[]> {
    return this.clientsService.findIncompleteClients();
  }

  @ApiOperation({ summary: 'Получение клиента по id' }) 
  @Get(':id')
  getClientById(@Param('id') id: number): Promise<Client> {
    return this.clientsService.getClientById(id);
  }

  @ApiOperation({ summary: 'Изменение клиента' }) 
  @Put(':id')
  updateClient(@Param('id') id: number, @Body() updateClient: Client): Promise<Client> {
    return this.clientsService.updateClient(id, updateClient);
  }

  @ApiOperation({ summary: 'Удаление клиента' }) 
  @Delete(':id')
  deleteClient(@Param('id') id: number): Promise<void> {
    return this.clientsService.deleteClient(id);
  }
}
