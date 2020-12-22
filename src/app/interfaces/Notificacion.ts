export interface Notificacion{
    id: number;
    area: string;
    tipo: string;
    categoria: string;
    folio: number;
    revision: number;
    estatus: string;
    origenclave: string;
    origenusuario: string;
    origenfecha: string;
    origenhora: string;
    destinoclave: string;
    destinousuario: string;
    destinorealizado: string;
    destinofecha: string;
    destinohora: string;
    destinoestatus: string;
    contenido: string;
    seccion: string;
    documento: string;
    nota: string;
}