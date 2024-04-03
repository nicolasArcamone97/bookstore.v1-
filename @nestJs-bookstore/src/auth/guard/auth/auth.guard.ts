import { BadRequestException, CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Observable } from 'rxjs';
import * as dotenv from 'dotenv'
dotenv.config()

@Injectable()
// los guars son los guardianes de los endpoints, antes de llegar a los controllers primero se pasa por los guards
// verificando si el usuario es un usuario que es autenticado, si es autenticado le da acceso a el endpoint y sino no 
export class AuthGuard implements CanActivate {

  constructor(private readonly jwtService: JwtService){}



  // metodo canActivate, heredado de la interfaz CanActivate
  // devuelve un booleano si la logica de verificacion de autenticacion es correcta y false en lo contrario
  // aprobando o no el uso del endpoint
  async canActivate(context: ExecutionContext){
    // obtenemos el request
    // El objeto context proporciona información
    // sobre la solicitud entrante y el entorno de ejecución.
    const request = context.switchToHttp().getRequest()
    
    // extraemos el token de la cabezera 
    const token = this.extractTokenFromHeader(request)

    // validamos si el token es null o no o si es un bearer
    if(!token){
      throw new UnauthorizedException()
    }

    try{
      
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET
        }
      )
      // le asignamos los datos public al usuario
      request.user = payload
    }catch{
      throw new UnauthorizedException();
    }
    
    
    return true;
  }


// funcion para extraer el token de la cabezera 
  private extractTokenFromHeader(request: Request) {
    const [type, token] = request.headers.authorization?.split(" ") ?? [];
    return type === "Bearer" ? token : undefined;
  }


}
