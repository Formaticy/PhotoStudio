import { Module } from '@nestjs/common';
import { PhotographersService } from './photographers.service';
import { PhotographersController } from './photographers.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
  controllers: [PhotographersController],
  providers: [PhotographersService],
  imports: [DatasourceModule]
})
export class PhotographersModule {}
