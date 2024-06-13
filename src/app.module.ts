import { Module } from '@nestjs/common';
import {TypeOrmModule}  from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacientesModule } from './pacientes/pacientes.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'citas_medicas',
      entities: [
        __dirname + '/**/**/*.entity{.ts,.js}', // cargar las entidades
      ],
      synchronize: true,
    }),
    PacientesModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
