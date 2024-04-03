import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './service/auth.service';
import { UserModule } from 'src/user/user.module';
import { CarroModule } from 'src/carro/carro.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UserModule, CarroModule, JwtModule.register({
    global:true,
    secret: process.env.JWT_SECRET,
    signOptions: {expiresIn: '30s'}
  })],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
