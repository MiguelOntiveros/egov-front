export interface ContratoPlantilla{
    id: number;
    persona: string,
    tipo: string;
    categoria: string;
    clave: string;
    elemento: string;
    seccion: string;
    numeracion: string;
    valor: string;
    orden: number;
    editable: boolean;
    fuente: string;
    tamaño: number;
    estilo: string;
    alineacion: string;
    registro: string;
}