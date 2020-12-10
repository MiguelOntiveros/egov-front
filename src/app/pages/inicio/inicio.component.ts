import { Component, OnInit } from '@angular/core';
import { Contratista } from 'src/app/interfaces/Contratista';
import { PruebaImagenesService } from 'src/app/services/prueba-imagenes.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  contratistas: Contratista[];
  imagen: string;
  urlSegura: SafeResourceUrl;


  constructor(private ImagenService: PruebaImagenesService, private sanitizer: DomSanitizer) { }

  ngOnInit(){
    this.urlSegura = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + this.ImagenService.getImagenes());
    this.ImagenService.getImagenes().subscribe((Temp)=>{
      this.imagen = Temp;
    })
    //this.ImagenService.dataURItoBlob2()
    //this.urlSegura = this.sanitizer.bypassSecurityTrustResourceUrl(this.ImagenService.URL);
  }
}
