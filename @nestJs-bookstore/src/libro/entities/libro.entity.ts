import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { User } from "src/user/entities/user.entity"

@Entity()
export class Libro {

    @PrimaryGeneratedColumn('increment')
    id:number

    @Column({nullable:false})
    titulo:string

    @Column()
    autor:string

    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date

    @ManyToMany(() => User, usuario => usuario.libros, {cascade:true})
    usuarios: User[]
}