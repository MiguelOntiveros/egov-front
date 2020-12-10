import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer, throwError } from 'rxjs';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PruebaImagenesService {

  private URL = 'http://localhost:8083/contratistadocumentoimagen/unicoregistro';

  private URL2 = 'https://mike-complise.herokuapp.com/contratistadocumentoimagen/unicoregistro';
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  getImagenes(): Observable<any> {
    return this.http.get<any>(this.URL);
  }
  /*
  vamosACalarnos(){
    return this.http.
  } */

  /* METODO PARA ARRAY CON IMAGEN */
  dataURItoBlob(dataURI) {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {
      type: 'image/jpg'
    });

   // var myFile:Blob=this.dataURItoBlob(dataURI);
  }

  /* var myFile:Blob=this.dataURItoBlob(myDataUri);*/

 /* METODO PARA IMAGEN */
 dataURItoBlob2() {
  var binary = atob(this.URL);
  var array = [];
  array.push(binary.charCodeAt);
  return new Blob([new Uint8Array(array)], {
    type: 'image/jpg'
  });
}

  /* CONVIERTE LA IMAGEN */
  getBase64ImageFromUrl(url: string) {
    return Observable.create((observer: Observer<string>) => {
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      if (!img.complete) {
        img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };
        img.onerror = (err) => {
          observer.error(err);
        }
      } else {
        observer.next(this.getBase64Image(img));
      }
    });
  }

  /* CONVIERTE LA IMAGEN A PNG */
  getBase64Image(img: HTMLImageElement) {
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL('image/png');
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }



}
