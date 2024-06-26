import { Component } from '@angular/core';
import { Location  } from '../models/Location.model';
import { LocationsListService } from '../services/locations-list.service';
import { SharedLocationService } from '../services/shared-location.service';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css']
})
export class LocationsListComponent {
  currentPage = 1;
  totalPages = 1;
  pages: number[] = [];
  pageThreshold = 3;

  locations: Location[] = [];
  selectedLocation: Location | null = null;

  constructor(private locationService: LocationsListService,
    private sharedLocationService: SharedLocationService 
  ) {
    this.refreshLocation();
  }

  selectLocation(location: Location): void {
    this.selectedLocation = location;
    console.log('Selected location:', location); 
    this.sharedLocationService.setSelectedLocation(location);
  }

  isSelected(location: Location): boolean {
    return this.selectedLocation === location;
  }

  refreshLocation(pageNumber: number = 1) {
    this.locationService.getLocations(pageNumber).subscribe(
      (data: any) => {
        this.locations = data.data;
        this.totalPages = Math.ceil(this.locations[0].total_records / this.locations[0].page_size);
        this.generatePages();
      },
      error => {
        console.error('Failed to fetch locations:', error);
      }
    );
  }

  generatePages(): void {
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.refreshLocation(page);
  }

  onNextClick(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.refreshLocation(this.currentPage);
    }
  }

  onBackClick(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.refreshLocation(this.currentPage);
    }
  }
}
