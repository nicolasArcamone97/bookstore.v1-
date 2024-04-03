import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ROLES_KEY } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  
  // El Reflector te permitirá leer los metadatos adjuntados a los controladores o controladores de métodos en tiempo de ejecución
  constructor(private reflector: Reflector){}
  

  canActivate(context: ExecutionContext){
    // getAllAndOverride del Reflector se utiliza para obtener los metadatos de un controlador o controlador de método toma dos argumentos:
    // metadataKey: Este es el nombre de la clave bajo la cual se almacenan los metadatos en el controlador o controlador de método. En este caso, metadataKey es Role.
    // metatype: Este es un arreglo que contiene los elementos de los cuales se obtendrán los metadatos. En este caso, se pasa un arreglo con dos elementos:
    // context.getHandler(): da como resultado la extracción de los metadatos para el controlador de ruta procesado actualmente.
    // context.getClass(): metadatos del controlador de clase.

    // obtenes los roles
    const requiredRoles = this.reflector.getAllAndOverride<Role>(ROLES_KEY, [
      context.getHandler(),
      context.getClass()
    ])
    console.log(requiredRoles)
    console.log(ROLES_KEY)
    // si no se reciben roles, se permite el acceso
    if(!requiredRoles){
      return true
    }

    // obtenemos el usuario
    const {user} = context.switchToHttp().getRequest()

    // si es administrador lo dejamos hacer lo que sea :D
    if (user.role === Role.admin) return true;

    // si el rol del usuario no esta en los roles, tiramos un error
    if(!requiredRoles.includes(user.role)){
      throw new UnauthorizedException('su rol de usuario no esta autorizado para esta funcion')
    };

    return true
  }



}
