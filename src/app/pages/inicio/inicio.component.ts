import { Component, OnInit } from '@angular/core';
import { Contratista } from 'src/app/interfaces/Contratista';
import { PruebaImagenesService } from 'src/app/services/prueba-imagenes.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  contratistas: Contratista[];
  urlSegura: SafeResourceUrl;


  constructor(private ImagenService: PruebaImagenesService, private sanitizer: DomSanitizer) { }

  ngOnInit(){
   // this.urlSegura = this.sanitizer.bypassSecurityTrustResourceUrl("'data:image/jpg;base64,");
   this.urlSegura = this.sanitizer.bypassSecurityTrustResourceUrl("http://localhost:8083/contratistadocumentoimagen/enviarimagen")
    this.ImagenService.getImagenes().subscribe((Temp)=>{
      this.urlSegura = Temp;
    })
    //this.ImagenService.dataURItoBlob2()    ${imagenes}'
    //this.urlSegura = this.sanitizer.bypassSecurityTrustResourceUrl(this.ImagenService.URL);
  }
}
