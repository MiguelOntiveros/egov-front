import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'documentosContratoAnexoPipe',
    pure: false,
  })

  export class DocumentosContratoAnexoImagenPipe implements PipeTransform {
    nuevoDocumentosCA = []
  
      transform(documentosCA: any[]): any {
        if (!documentosCA) return [];
        this.nuevoDocumentosCA = []
  
        documentosCA.forEach((documento) => {
          let objetoCA: any = {};
  
          objetoCA.nombre = documento;
  
          switch (documento) {
            case 'QR':
              objetoCA.enlace = '/adquisiciones';
              break;
            case 'Escrito de conformidad la dependencia solicitante':
              objetoCA.enlace  = '/patrimonios';
              break;
            case 'Acta de entrega':
              objetoCA.enlace = '/obras';
              break;
            case 'Evidencia fotografica':
              objetoCA.enlace = '/lista-documentos';
              break;
            case 'Factura para pago y xml':
              objetoCA.enlace = '/adquisiciones';
              break;
            case 'Verificacion de comprobantes fiscales digitales al SAT':
              objetoCA.enlace = '/patrimonios';
              break;
            case 'Contrarecibo':
              objetoCA.enlace = '/obras';
              break;
            case 'Cuentas contables afectadas':
              objetoCA.enlace = '/lista-documentos';
              break;
            case 'Autorizacion de transferencia electronica o emision de cheque':
              objetoCA.enlace = '/obras';
              break;
            case 'Comprobante de transferencia o copia del cheque':
              objetoCA.enlace = '/lista-documentos';
              break;
            case 'Poliza de diario':
              objetoCA.enlace = '/adquisiciones';
              break;
            case 'SEGUIMIENTO 1':
              objetoCA.enlace = '/lista-documentos';
              break;
            case 'NULL':
                objetoCA.enlace = '/lista-documentos';
                break;
            default:
              break;
          }
  
          this.nuevoDocumentosCA.push(objetoCA);
        });
  
        return this.nuevoDocumentosCA;
      }
    }