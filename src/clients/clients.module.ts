import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
  controllers: [ClientsController],
  providers: [ClientsService],
  imports: [DatasourceModule]
})
export class ClientsModule {}
