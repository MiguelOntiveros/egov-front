import { Component, OnInit } from '@angular/core';
import { ConfiguracionWeb } from '../../interfaces/ConfiguracionWeb';
import { ConfiguracionWebService } from './configuracion-web.service';

@Component({
  selector: 'app-configuracion-web',
  templateUrl: './configuracion-web.component.html',
  styleUrls: ['./configuracion-web.component.css']
})
export class ConfiguracionWebComponent implements OnInit {
  
  configuracionWeb: ConfiguracionWeb[];

  constructor(private configuracionWebService: ConfiguracionWebService) { }

  ngOnInit(): void {
  this.configuracionWebService.getConfiguracionWeb().subscribe((data: any) => {
    this.configuracionWeb = data;
    console.log(data);
  })
  }

}
