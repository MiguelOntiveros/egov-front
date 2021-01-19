import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'documentosPadronPipe',
    pure: false,
  })

  export class DocumentosPadronPipe implements PipeTransform {
    nuevoDocumentosCA = []
  
      transform(documentosCA: any[]): any {
        if (!documentosCA) return [];
        this.nuevoDocumentosCA = []
  
        documentosCA.forEach((documento) => {
          let objetoCA: any = {};
  
          objetoCA.nombre = documento;
  
          switch (documento) {
            case 'ACTA CONSTITUTIVA':
              objetoCA.enlace = '/adquisiciones';
              break;
            case 'ALTA DE HACIENDA':
              objetoCA.enlace  = '/patrimonios';
              break;
            case 'COMPROBANTE DE DOMICILIO':
              objetoCA.enlace = '/obras';
              break;
            case 'UBICACIÓN FOTOGRÁFICA DEL DOMICILIO':
              objetoCA.enlace = '/lista-documentos';
              break;
            case 'IDENTIFICACIÓN OFICIAL':
              objetoCA.enlace = '/adquisiciones';
              break;
            case 'PODER LEGAL':
              objetoCA.enlace = '/patrimonios';
              break;
            case 'ALTA DE HACIENDA':
              objetoCA.enlace = '/obras';
              break;
            case 'LOGO DE LA PERSONA MORAL':
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