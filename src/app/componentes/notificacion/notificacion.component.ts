import { Component, OnInit } from '@angular/core';
import { NotificacionService } from './notificacion.service';
import { Notificacion } from '../../interfaces/Notificacion';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css']
})
export class NotificacionComponent implements OnInit {

  notificacion: Notificacion[];

  constructor(private notificacionService: NotificacionService) { }

  ngOnInit(): void {
    this.notificacionService.getNotificacion().subscribe((data: any) => {
      this.notificacion = data;
      console.log(data);
    })
  }

}
