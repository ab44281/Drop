import { Component, OnInit } from '@angular/core';
import { SocietyService } from '../society.service';
import { Society } from '../society';

@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.css']
})
export class SocietyComponent implements OnInit {

  societies: any = [];

  constructor(private _service: SocietyService) { }

  ngOnInit() {
    this._service.getSociety().subscribe(data => {
      console.log(data);
      this.societies = data;
    });
  }

}
