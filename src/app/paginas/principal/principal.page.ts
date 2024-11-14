import { GeneralService } from './../../servicios/general.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
 
  constructor(public servG:GeneralService) { }

  ngOnInit() {
  }


}
