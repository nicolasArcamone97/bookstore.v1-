import * as dotenv from 'dotenv'
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


// import { SnakeNamingStrategy } from 'typeorm-snake-naming-strategy'  error con este packete
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CarroModule } from './carro/carro.module';
import { dbConfig } from './db.config';
import { LibroModule } from './libro/libro.module';


dotenv.config()





@Module({
  
  imports: [
    TypeOrmModule.forRoot(dbConfig),
    UserModule,
    CarroModule,
    AuthModule,
    LibroModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
