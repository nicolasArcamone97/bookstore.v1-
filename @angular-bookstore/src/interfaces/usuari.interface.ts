import { Carro } from "./carro.interface"
import { Libro } from "./libro.interface"

export interface Usuario {
    id: number, 
    nombre: string,
    email: string,
    password: string,
    role: string,
    genero: string,
    carro: Carro,
    libros: Libro[]
}