export interface ContratoAnexoImagen{
    id: number;
    area: string;
    tipo: string;
    categoria: string;
    folio: number;
    revision: number;
    documento: string;
    folio1: number;
    // imagen: byte[];
    archivo: boolean;
    extension: string;
    no_seguimiento: number;
    tipo_archivo: boolean;
    observaciones: string;
    fecha_creado: string;
    hora_creado: string;
    en_ejecucion: boolean;
    en_cumplimiento: boolean;
    escaneado: boolean;
}