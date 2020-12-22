export interface UsuarioModulo{
    id: number;
    clave: string;
    modulo: string;
    submodulo: string;
    lectura: boolean;
    modificar: boolean;
    borrar: boolean;
    agregar: boolean;
}