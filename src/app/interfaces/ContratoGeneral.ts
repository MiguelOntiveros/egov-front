export interface ContratoGeneral{
    id?: number;
    persona?: string;
    tipo?: string;
    categoria?: string;
    clave?: string;
    dato?: string;
    valor?: string;
    formato?: string;
    orden?: number;
    requerido?: boolean;
    qr?: boolean;
    qrvalor?: string;
    registro?: string;
}