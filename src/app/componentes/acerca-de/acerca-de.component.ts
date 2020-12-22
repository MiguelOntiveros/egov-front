import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  informacionSocio1 = 'Gabriel Mayagoitia Fragoso'
+ ' Phd DOCTOR EN DERECHO'
+ ' PRESIDENTE Y DIRECTOR GENERAL'
+ ' gmayagoitia@mayagoitiaabogados.com';

informacionSocio2 = 'Mara Mireya Martínez Acosta'
+ ' LIC. EN DERECHO'
+ ' SUBDIRECTORA GENERAL'
+ ' mmartinez@mayagoitiaabogados.com'
+ ' Celular +52 1 811 500 2001';

ubicacionTelefonos = 'Lope de Vega 1706 Col. Obispado Monterrey, N.L, C.P. 64060. Mexico'
+ 'Teléfono +52(81) 8123 2310 / +52(81) 8123 2320';

informacionCopyright = '@ copyright 2016. Todos los derechos reservados, protegidos por el Convenio de Bema'
+ ' , Acta de Paris y demas Tratados y Convenios Internacionales'
+ ' Ninguna parte de este software o sus imagenes pueden ser reproducidas total o parcialmente, en '
+ ' cualquier forma o cualquier medio,sin el permiso por escrito de M&M Consultoría en Finanzas y '
+ ' Administración Pública, S.A. de C.V.';




  constructor() { }

  ngOnInit(): void {
  }

}
