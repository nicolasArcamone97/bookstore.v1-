import * as dotenv from 'dotenv'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import * as morgan from 'morgan'

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);

  // configurar un endpoint global, api/usuario, api/perros
  app.setGlobalPrefix('api')

  

  // configurar variable de entorno 
  dotenv.config()

  // 
  app.use(morgan('dev'))
  
  // para validar los dtos
  app.useGlobalPipes(new ValidationPipe({
    transformOptions:{
      enableImplicitConversion:true
    }
  }))

  

  const corsOptions: CorsOptions = {
    origin: 'http://localhost:4200', // Reemplaza con la URL de tu frontend
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true,
  };

  app.enableCors(corsOptions)


  await app.listen(3001);


}
bootstrap();
