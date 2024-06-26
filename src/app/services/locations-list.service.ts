import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationsListService {
  readonly API_URL = `${environment.BaseUrl}/locations/language/fr/app-language/fr/lattitude/0/longitude/0/page-number`;

  constructor(private http: HttpClient) { }

  getLocations(pageNumber: number): Observable<Location[]> {
    const apiUrl = `${this.API_URL}/${pageNumber}/page-size/10/filter/null/search/null/sort/null`;
    return this.http.get<Location[]>(apiUrl);
  }

}
