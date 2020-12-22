export interface ConfiguracionNotificacionCorreo{
    id: number;
    tipo: string;
    categoria: string;
    estatus: string;
    revision: string;
    personalizadoasunto: string;
    personalizadocontenido: boolean;
    notificacion: boolean;
    notificacion1: boolean;
    recordatoriotiempo: number;
    recordatorioasunto: string;
    recordatoriocontenido: boolean;
    recordatoriotiempo1: number;
    recordatorioasunto1: string;
    recordatoriocontenido1: boolean;
    alertatiempo: number;
    alertaasunto: string;
    alertacontenido: boolean;
    alertatiempo1: number;
    alertaasunto1: string;
    alertacontenido1: boolean;
}