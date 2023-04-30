import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photosession } from 'src/photosessions/photosession.entity';

@Module({
  controllers: [ClientsController],
  providers: [ClientsService],
  imports: [DatasourceModule,
  TypeOrmModule.forFeature([Photosession])]
})
export class ClientsModule {}
