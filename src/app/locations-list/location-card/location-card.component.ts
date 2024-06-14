import { Component, Input } from '@angular/core';
import { Location } from '../../models/Location.model';


@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.css']
})
export class LocationCardComponent {
  @Input({required:true}) location!: Location ;



   getLocationName(location: Location): string | undefined {
    const name = location.location_attributes.find(attr => attr.machine_name === 'name');
    return name ? name.value : undefined;
}

getLocationAddress(location: Location): string | undefined {
  const add = location.location_attributes.find(attr => attr.machine_name === 'address');
  return add ? add.value : undefined;
}

getLocationRating(location: Location): string | undefined {
  const rating = location.location_attributes.find(attr => attr.machine_name === 'rating');
  return rating ? rating.value : undefined; 
}







}
