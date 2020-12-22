export interface ContratoOficialImagen{
    id: number;
    area: string;
    tipo: string;
    categoria: string;
    folio: number;
    revision: number;
    documento: string;
    folio1: number;
    // imagen: byte[];
    observaciones: string;
    escaneado: boolean;
    extension: string;
}