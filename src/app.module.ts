import { Module } from '@nestjs/common';
import { PhotosessionsModule } from './photosessions/photosessions.module';
import { PhotographersModule } from './photographers/photographers.module';
import { ClientsModule } from './clients/clients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import CONNECTION from '../configurations/db.connection';

@Module({
  imports: [ClientsModule, PhotographersModule, PhotosessionsModule,
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