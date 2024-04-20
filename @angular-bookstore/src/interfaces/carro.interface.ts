import { Libro } from "./libro.interface"
import { Usuario } from "./usuari.interface"

export interface Carro {
    id:number,
    total: number,
    cantidad: number,
    usuario: Usuario
    libros: Libro[]
}
