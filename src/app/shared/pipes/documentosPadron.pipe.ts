import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'documentosPadronPipe',
    pure: false,
  })

  export class DocumentosPadronPipe implements PipeTransform {
    transform(documentosPadron: any[]): any {
  
      if (!documentosPadron) return [];
  
      documentosPadron.forEach((documento) => {
        switch (documento) {
          case 'QR':
            documento = '/adquisiciones';
            break;
          case 'Escrito de conformidad la dependencia solicitante':
            documento = '/patrimonios';
            break;
          case 'Acta de entrega':
            documento = '/obras';
            break;
          case 'Evidencia fotografica':
            documento = '/lista-documentos';
            break;
          case 'Factura para pago y xml':
            documento = '/adquisiciones';
            break;
          case 'Verificacion de comprobantes fiscales digitales al SAT':
            documento = '/patrimonios';
            break;
          case 'Contrarecibo':
            documento = '/obras';
            break;
          case 'Cuentas contables afectadas':
            documento = '/lista-documentos';
            break;
          case 'Autorizacion de transferencia electronica o emision de cheque':
            documento = '/obras';
            break;
          case 'Comprobante de transferencia o copia del cheque':
            documento = '/lista-documentos';
            break;
          case 'Poliza de diario':
            documento = '/adquisiciones';
            break;
          case 'NULL':
            documento = '/lista-documentos';
            break;
          default:
            break;
        }
      });
  
      return documentosPadron;
    }
  }