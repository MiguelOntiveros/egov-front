export interface ContratoFirma{
    id: number;
    area: string;
    tipo: string;
    categoria: string;
    folio: number;
    revision: number;
    responsable: string;
    responsablenombre: string;
    responsablepuesto: string;
    responsabletipo: string;
    enviadofecha: string;
    enviadohora: string;
    enviadousuario: string;
    enviadonombre: string;
    recibidofecha: string;
    recibidohora: string;
    recibidousuario: string;
    recibidonombre: string;
    estatus: string;
    observaciones: string;
}