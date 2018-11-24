import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Society } from './society';

@Injectable({
  providedIn: 'root'
})
export class SocietyService {

  constructor(private http: HttpClient) { }

  getSociety() {
    return this.http.get('https://betterworld.herokuapp.com/society/society');
  }

  // getSociety(): Observable<Society[]> {
  //   return this.http.get('https://betterworld.herokuapp.com/society/society').pipe(map((response => response.json()));
  // }
}
