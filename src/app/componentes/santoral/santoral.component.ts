import { Component, OnInit } from '@angular/core';
import { Santoral } from '../../interfaces/Santoral';
import { SantoralService } from './santoral.service';

@Component({
  selector: 'app-santoral',
  templateUrl: './santoral.component.html',
  styleUrls: ['./santoral.component.css']
})
export class SantoralComponent implements OnInit {

  santoral: Santoral[];

  constructor(private santoralService: SantoralService) { }

  ngOnInit(): void {
    this.santoralService.getSantoral().subscribe((data: any) => {
      this.santoral = data;
      console.log(data);
    })
  }

}
