import { Libro } from "src/libro/entities/libro.entity"
import { User } from "src/user/entities/user.entity"
import { Column, Entity, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Carro {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({default:0})
    total: number

    @Column({default:0})
    cantidad: number

    @OneToOne(type => User, user => user.carro, {cascade:true} )
    usuario: User

    @ManyToMany(() => Libro, libro => libro.carros)
    @JoinTable({
        name: 'carro_libros',
        joinColumn: {
            name: 'carro_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'libro_id',
            referencedColumnName: 'id'
        }
    })
    libros: Libro[]

}