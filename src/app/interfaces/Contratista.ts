export interface Contratista{
    id: number;
    numero: number;
    persona: number;
    nombregenero: string;
    nombre: string;
    rfc: string;
    registro: number;
    padron: string;
    calle: string;
    numext: string;
    numint: string;
    edificio: string;
    colonia: string;
    pais: number;
    estado: number;
    ciudad: number;
    codpos: string;
    contacto: string;
    telefonos: string;
    giro: number;
    email: string;
    web: string;
    notas: string;
    estatus: number;
    bloqueado: string;
    suspendido: boolean;
    // completo: boolean;
    creadousuario: string;
    creadofecha: string;
    creadohora: string;
    inscripcion: string;
    vigencia: string;
    suspendidofecha: string;
    suspendidomotivo: number;
    suspendidoobservaciones: string; // next
    curp: string;
    generico: number;

    
}