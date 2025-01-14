import { Body, Controller, Delete, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDTO } from '../dto/user.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/auth/role.enum';
import { Libro } from 'src/libro/entities/libro.entity';

@Controller('user')
export class UserController {

    constructor( private readonly userService: UserService){}

    // @Auth(Role.admin)
    @Get()
    async findUsers(){
        return await this.userService.findUsers()
    }

    @Get(':id')
    async findUser(@Param('id') id:number){
        return await this.userService.findUser(id)
    }

    @Post()
    createUser(@Body() user:CreateUserDTO){
        return this.userService.createUser(user)
    }


    @Post('add-libro-user')
    asignarLibro(@Body() body: {usuarioId:number, libroId:number}){
        return this.userService.asignarLibro(body.usuarioId, body.libroId)
    }
    
    @Delete(':userId/libro/:libroId')
    deleteLibro(@Param('userId') usuarioId: number, @Param('libroId') LibroId:number){
        return this.userService.eliminarLibro(usuarioId,LibroId)
    }


}
