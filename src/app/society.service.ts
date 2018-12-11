import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Society } from './society';

@Injectable({
  providedIn: 'root'
})
export class SocietyService {

  SocietyUrl = 'https://betterworld.herokuapp.com/society/society';

  constructor(private http: HttpClient) { }

  getSociety() {
    return this.http.get(this.SocietyUrl);
  }

  getSocietyName() {
    return this.http.get(this.SocietyUrl);
  }
}

