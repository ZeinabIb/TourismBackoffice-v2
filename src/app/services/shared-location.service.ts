import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Location } from '../models/Location.model';

@Injectable({
  providedIn: 'root'
})
export class SharedLocationService {
  private selectedLocationSubject = new BehaviorSubject<Location | null>(null);
  selectedLocation$ = this.selectedLocationSubject.asObservable();

  setSelectedLocation(location: Location) {
    this.selectedLocationSubject.next(location);
  }
}
