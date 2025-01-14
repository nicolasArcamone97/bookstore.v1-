import { Libro } from "./libro.interface"


export interface Categoria {
    id: number
    nombre: string
    descripcion:string
    libros: Libro[]
}