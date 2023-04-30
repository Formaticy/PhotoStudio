import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { DatasourceService } from './datasource.service';

@Module({
    providers: [DatasourceService],
    exports: [DatasourceService],
})
export class DatasourceModule {}
