import { Libro } from "src/libro/entities/libro.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Categoria {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({nullable:false})
    nombre: string

    @Column()
    descripcion: string

    @ManyToMany( () => Libro , libro => libro.categorias)
    @JoinTable({
        name:'categoria_libros',
        joinColumn: {
            name: 'categoria_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'libro_id',
            referencedColumnName: 'id'
        }
    })
    libros: Libro[]
    

}