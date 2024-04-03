import { User } from "src/user/entities/user.entity"
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm"

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


}