import { Usuario } from "./usuari.interface"

export interface Carro {
    id:number,
    total: number,
    cantidad: number,
    usuario: Usuario
}
