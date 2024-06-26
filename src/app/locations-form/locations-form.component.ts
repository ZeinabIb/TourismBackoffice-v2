import { Component, OnInit } from '@angular/core';
import { Location } from '../models/Location.model';
import { SharedLocationService } from '../services/shared-location.service';

@Component({
  selector: 'app-locations-form',
  templateUrl: './locations-form.component.html',
  styleUrls: ['./locations-form.component.css']
})
export class LocationsFormComponent implements OnInit {
  selectedLocation: Location | null = null;
  locationName: string | null = null;
  constructor(private sharedLocationService: SharedLocationService) {}

  ngOnInit(): void {
    this.sharedLocationService.selectedLocation$.subscribe(location => {
      this.selectedLocation = location;
      this.getLocationName();
    });
  }

  getLocationName(): void {
    if (this.selectedLocation) {
      const nameAttribute = this.selectedLocation.location_attributes.find(attr => attr.machine_name === 'name');
      this.locationName = nameAttribute ? nameAttribute.value : null;
    }
  }
}
