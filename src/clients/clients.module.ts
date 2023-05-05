import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './client.entity';
import { ClientRepository } from './client.repository';

@Module({
  controllers: [ClientsController],
  providers: [ClientsService],
  imports: [
  TypeOrmModule.forFeature([Client, ClientRepository])]
})
export class ClientsModule {}
