import { Component, OnInit } from '@angular/core';
import { ContratistaDocumentoService } from './contratista-documento.service';
import { ContratistaDocumento } from '../../interfaces/ContratistaDocumento';

@Component({
  selector: 'app-contratista-documento',
  templateUrl: './contratista-documento.component.html',
  styleUrls: ['./contratista-documento.component.css']
})
export class ContratistaDocumentoComponent implements OnInit {

  contratistasDocumento: ContratistaDocumento[];

  constructor(private contratistaDocumentoService: ContratistaDocumentoService) { }

  ngOnInit(): void {
    this.contratistaDocumentoService.getContratistaDocumento().subscribe((data: any) => {
      this.contratistasDocumento = data;
      console.log(data);
    })
  }

}
