import { Component, OnInit } from '@angular/core';
import { SocietyService } from '../society.service';
import { Society, ISociety } from '../society';

@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.css']
})
export class SocietyComponent implements OnInit {

 public societies: ISociety[];

 constructor(private _service: SocietyService) { }

  ngOnInit() {
    this._service.getSociety().subscribe((data: any) => {
      this.societies = data.dbResponse.rows;
      console.log(this.societies);
    });
  }

  // getSociety() {
  //     this._service.getSociety().subscribe(data => {
  //     console.log(data);
  //     // this.societies = data;
  //   });
  // }

}

