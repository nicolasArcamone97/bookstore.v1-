import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { User } from "src/user/entities/user.entity"
import { Categoria } from "src/categoria/entities/categoria.entity"
import { Carro } from "src/carro/entities/carro.entity"

@Entity()
export class Libro {

    @PrimaryGeneratedColumn('increment')
    id:number

    @Column({nullable:false})
    titulo:string

    @Column()
    autor:string

    @Column()
    descripcion: string

    @Column({default:0, nullable:false})
    precio: number

    @Column()
    portada: string

    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date

    @ManyToMany(() => User, usuario => usuario.libros, {cascade:true})
    usuarios: User[]

    @ManyToMany(() => Categoria, categoria => categoria.libros, {cascade:true})
    categorias: Categoria[]

    @ManyToMany(() => Carro, carro => carro.libros, {cascade:true})
    carros: Carro[]
}