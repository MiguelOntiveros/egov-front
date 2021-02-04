export interface ContratoGeneralDato{
    id?: number;
    area?: string;
    tipo?: string;
    categoria?: string;
    folio?: number;
    revision?: number;
    clave?: string;
    dato?: string;
    valor?: string;
    formato?: string;
    orden?: number;
    requerido?: boolean;
    qr?: boolean;
    qrValor?: string;
}