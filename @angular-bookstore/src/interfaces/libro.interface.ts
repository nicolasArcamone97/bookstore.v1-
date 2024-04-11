import { Categoria } from "./categoria.interface"

export interface Libro {
    id: number,
    titulo: string,
    autor: string,
    descripcion: string,
    precio: number,
    portada: string
    categorias: Categoria[]
}