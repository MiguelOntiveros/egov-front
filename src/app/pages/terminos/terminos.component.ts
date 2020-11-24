import { HttpEventType } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../../interfaces/Usuario';
import { DataService } from '../../services/data.service';
import { Contratista } from 'src/app/interfaces/Contratista';
import { ContratistaServiceService } from 'src/app/services/contratista-service.service';

@Component({
  selector: 'app-terminos',
  templateUrl: './terminos.component.html',
  styleUrls: ['./terminos.component.css']
})
export class TerminosComponent implements OnInit {

  contratistas: Contratista[];

  constructor(private ContratistaService: ContratistaServiceService) {
   }

  ngOnInit(){
    this.ContratistaService.getContratista().subscribe((Temp)=>{
      this.contratistas = Temp;
    })
  }

}
