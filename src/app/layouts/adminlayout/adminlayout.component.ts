import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../../services/alertify/alertify.service';

@Component({
  selector: 'app-adminlayout',
  templateUrl: './adminlayout.component.html',
  styleUrls: ['./adminlayout.component.css']
})
export class AdminlayoutComponent implements OnInit {

  constructor(private alertify: AlertifyService) { }

  ngOnInit(){
  }

}
