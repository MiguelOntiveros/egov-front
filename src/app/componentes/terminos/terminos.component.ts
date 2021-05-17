import { useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { FiltrosService } from '../filtros/filtros.service';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-terminos',
  templateUrl: './terminos.component.html',
  styleUrls: ['./terminos.component.css']
})

export class TerminosComponent implements OnInit {

  scrollStatus = 'Prueba de Scroll'

  fecha: string;

  cargando: boolean;

  urlWhatsApp: string = 'https://api.whatsapp.com/send?phone=+5218128932850&text=HolaMundo';


  fechaActual: Date = new Date();

  formPrueba: FormGroup;

  isSubmitted: boolean = false;

  // City Names
  City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan']

  private image: any;

  constructor(
    private fb: FormBuilder,
    // private filtroService: FiltrosService,
    ){
    this.formPrueba = this.fb.group({
      // fecha: ['']
      cityName: ['', Validators.required]

    })
  }

  ngOnInit(): void {
    // this.verFechaActual('2014/04/14')
  }


  onSubmit(){
  this.isSubmitted = true;
  if(!this.formPrueba.valid){
    return false;
  }else {
    alert(JSON.stringify(this.formPrueba.value))
  }


  }

  changeCity(e){
  this.cityName.setValue(e.target.value, {
    onlySelf: true
  })
  }

  get cityName(){
    return this.formPrueba.get('cityName');
  }

  irArriba(){
  window.scrollTo(0, 0)
  }

  cargandoActivar(){}

  subirArchivos(){
    console.log('Archivo subido');
    // Activar o mandar el servicio de la imagen

  }

  // handleImage(event:any): void{
  //   this.image = event.target.files[0];
  //   console.log('Image', this.image);
  // }

  // pruebaArchivo(event: any): void{
  //   this.image = event.target.files[0];
  //   var reader = new FileReader();
  //   var fileByteArray = [];
  //   reader.readAsArrayBuffer(this.image);
  //   reader.onloadend = () => {
  //       if(event.target.readyState == FileReader.DONE){
  //         var arrayBuffer = event.target.result,
  //             array = new Uint8Array(arrayBuffer);
  //             console.log(arrayBuffer);
  //             console.log(array);
  //          for(var i = 0; i < array.length; i++){
  //             fileByteArray.push(array[i]);
  //          }   
  //       }else{
  //         console.error('Error al convertir la imagen');
  //       }
  //   }

  // }

  // convertirDataURIToBinary(dataURI){
  //   let base64Index = dataURI.indexOf(';base64,') + ';base64,'.length;
  //   let base64 = dataURI.substring(base64Index);
  //   let raw = window.atob(base64);
  //   let rawLength = raw.length;
  //   let array = new Uint8Array(new ArrayBuffer(rawLength));

  //   for(let i = 0; i < rawLength; i++){
  //     array[i] = raw.charCodeAt(i);
  //   }
  //   return Array
  // }

  // upload(){
  //   const file = document.querySelector('input[type=file]').files[0];

  //   const preview = document.getElementById('preview');
  //   preview.
  //   const reader = new FileReader();
  //   let byteArray;

  //   reader.addEventListener("loadend", () => {
  //     console.log('base64', reader.result);
  //     preview.src = reader.result
  //     byteArray = this.convertirDataURIToBinary(reader.result);
  //     console.log('byte array, byteArray');
  //   }, false);
  //   if(file){
  //     reader.readAsDataURL(file);
  //   }

  // }

  // submitForm(){
  //   let fileList = document.getElementById('image').isDefaultNamespace;
  //   let fileReader = new FileReader();
  //   if(fileReader && fileList && fileList.length){
  //     fileReader.readAsArrayBuffer(fileList[0]);
  //      fileReader.onload = () => {
  //        let imageData = fileReader.result;
  //        console.log(imageData);
  //      }
  //   }

  // }

  // formatImage(img: any){
  // return 'data:image/jpeg;base64,' + img;
  // }

  enviarMensaje(){
    // let mandarMensaje = 'https://api.whatsapp.com/send?phone=+5218128932850&text=HolaMundo';
  //   window.onclick = miFuncion;

  // function miFuncion(){
    
  // }

  // const funcionOnClick = () => ({

  // });

  }


  // verFechaActual(fechai){

    // const { fecha } = this.formPrueba.value;

    // fecha.toString();

    // this.fecha = fecha;

    // this.fecha = fechai;

    // let fechaParam = '2021/03/26';
    // fechaParam = fechai;

    // this.filtroService.getFechaPrueba(fechai).subscribe((data: any) =>{
      // console.log(data);
    // })

    // console.log(fecha);


    // console.log(this.fechaActual);

    // this.fecha = this.fechaActual.toString();
    // this.fecha = '2021-03-26';
    // console.log(this.fecha);

    // document.getElementById("fecha").value = "";
    

    // console.log('ok');

  // }

  convertirFecha(){


    
    const { fecha } = this.formPrueba.value;

    

    // let fechaConvertida = JSON.stringify(fecha);
    
    
    // let fechaConvertida = JSON.parse(fecha);
    
    // let fechaConvertida = fecha.format("dd/mm/yyyy");

    let fechaConvertida = new DatePipe('en-US').transform(fecha, 'yyyy/MM/dd');
    // console.log(fechaConvertida.);

    // this.filtroService.getFechaPrueba(fechaConvertida).subscribe((data: any) =>{
    //   console.log(data);
    // })

    // console.log('Convertir fecha');
    // console.log(fecha);

  }
  
  activarCarga(){
    
    // Swal.fire({
    //   title: 'Cargando...',
    //   html: 'Obteniendo datos',
    //   timer: 2000,
    //   timerProgressBar: true,
    // }).then( () => {
    //   this.filtroService.getFechaPrueba().subscribe((data: any) =>{
    //     console.log(data);
    //   })
    // })
    
      // this.filtroService.getFechaPrueba().pipe(
      //   Swal.fire({
      //     title: 'Cargando...',
      //     html: 'Obteniendo datos',
      //     timer: 2000,
      //     timerProgressBar: true,
      //   }).then
      // ).subscribe((data: any) =>{
      //   console.log(data);
      // })
  }
  



}


















// fromEvent(document, 'scroll').subscribe(
    //   a => this.scrollStatus = 
    //   (document.documentElement.scrollTop === 0)
    //     ? 'Arriba del todo'
    //     : 'Bajando...'
    // )

    //  const scroll = fromEvent(document, 'scroll');

    // scroll.subscribe( x => console.log(x) )





    // clicks.pipe(
  //   tap( x => console.log(x, 'clientX'))
  // ).subscribe( x => console.log(x) );
