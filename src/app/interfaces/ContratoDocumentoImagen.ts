export interface ContratoDocumentoImagen{
    id: number;
    area: string;
    tipo: string,
    categoria: string;
    folio: number;
    revision: number;
    documento: string;
    nombre: string;
    folio1: number,
    // imagen: byte[];
    escaneado: boolean;
    extension: string;
}