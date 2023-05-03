import { Module } from '@nestjs/common';
import { PhotosessionsModule } from './photosessions/photosessions.module';
import { DatasourceModule } from './datasource/datasource.module';
import { PhotographersModule } from './photographers/photographers.module';
import { ClientsModule } from './clients/clients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import CONNECTION from '../configurations/db.connection';

@Module({
  imports: [PhotosessionsModule, DatasourceModule, PhotographersModule, ClientsModule,
    // @ts-ignore
    TypeOrmModule.forRoot({
      ...CONNECTION,
      synchronize: false, //отключаем автосинхронизацию(в противном случае при каждом перезапуске наша БД будет создаваться заново)
      logging: 'all', //включим логирование для удобства отслеживания процессов
	    entities: ['dist/**/*.entity{.ts,.js}'], //указываем путь к сущностям
    }),
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}