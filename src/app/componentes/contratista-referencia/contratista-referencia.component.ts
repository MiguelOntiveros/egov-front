import { Component, OnInit } from '@angular/core';
import { ContratistaReferencia } from '../../interfaces/ContratistaReferencia';
import { ContratistaReferenciaService } from './contratista-referencia.service';

@Component({
  selector: 'app-contratista-referencia',
  templateUrl: './contratista-referencia.component.html',
  styleUrls: ['./contratista-referencia.component.css']
})
export class ContratistaReferenciaComponent implements OnInit {

  contratistasReferencia: ContratistaReferencia[];

  constructor(private contratistaReferenciaService: ContratistaReferenciaService) { }

  ngOnInit(): void {
  this.contratistaReferenciaService.getContratistaReferencia().subscribe((data: any) => {
    this.contratistasReferencia = data;
    console.log(data);
  })
  }

}
