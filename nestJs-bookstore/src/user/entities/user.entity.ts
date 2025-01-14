
import { Role } from "src/auth/role.enum";
import { Carro } from "src/carro/entities/carro.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { GeneroUser } from "../genero.enum";
import { Libro } from "src/libro/entities/libro.entity";
import { join } from "path";


@Entity()
export class User {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({nullable:false})
    nombre: string

    @Column({nullable:false, unique:true})
    email: string

    @Column({nullable:false})
    password: string

    @Column({type:'enum', enum: Role, default:Role.user})
    role:Role

    @Column({type:'enum', enum: GeneroUser, nullable:false})
    genero: GeneroUser

    @OneToOne(type => Carro, carro => carro.usuario)
    @JoinColumn()
    carro: Carro

    @ManyToMany(() => Libro, libro => libro.usuarios)
    @JoinTable({
        name: 'usuario_libro',   // name de la tabla de la relacion 
        joinColumn: {
            name: 'usuario_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'libro_id',
            referencedColumnName: 'id'
        }
    })
    libros: Libro[]

}