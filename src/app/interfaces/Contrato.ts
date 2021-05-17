export interface Contrato {
    id?: number;
    area?: string;
    tipo?: string;
    categoria?: string;
    folio?: number;
    contrato?: string;
    valor?: string;
    clasificacion?: string;
    ubicacion?: string;
    notas?: string;
    estatus?: string;
    revision?: string;
    bloqueado?: string;
    con_numero?: number;
    con_nombregenero?: string;
    con_nombre?: string;
    con_rfc?: string;
    con_persona?: string;
    con_registro?: string;
    con_padron?: string;
    con_representante?: string;
    con_contacto?: string;
    con_domicilio?: string;
    con_telefonos?: string;
    con_giro?: string;
    con_email?: string;
    con_notas?: string;
    completo?: boolean;
    cancelado?: boolean;
    creadousuario?: string;
    creadofecha?: string;
    creadohora?: string;
    con_inscripcion?: string;
    con_vigencia?: string;
    con_curp?: string;
    // requeridos: boolean
    canceladofecha?: string;
    canceladomotivo?: number;
    canceladoobservaciones?: string;
    restauradofecha?: string;
    restauradomotivo?: number;
    restauradoobservaciones?: string;
}