import { Libro } from "./libro.interfaz"

export interface Categoria {
    id:number,
    nombre: string
    libros: Libro[]
}