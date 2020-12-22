export interface ContratoSeguimientoCorreo{
    id: number;
    area: string;
    tipo: string;
    categoria: string;
    folio: number;
    revision: string;
    contrato: string;
    contratodescripcion: string;
    fechainicio: string;
    fechafin: string;
    horaenvio: string;
    periodo: string;
    fechasiguientecorreo: string;
    seguimientotipo: string;
    responsablenombre: string;
    responsabledepto: string;
    responsablepuesto: string;
    responsabletelefonos: string;
    responsablecorreo: string;
    jefenombre: string;
    jefedepto: string;
    jefepuesto: string;
    jefetelefonos: string;
    jefecorreo: string;
    motivo: boolean;
    observaciones: string;
    correoseguimientoestatus: string;
    diascompletarseguimiento: string;
    enviado: boolean;
    terminado: boolean;
    estatusurl: boolean;
    hashcode: string;
    codigo: string;
    creadousuario: string;
    creadofecha: string;
    creadohora: string;


}