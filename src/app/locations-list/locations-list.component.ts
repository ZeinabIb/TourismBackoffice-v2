import { Component } from '@angular/core';
import { Location } from '../models/Location.model';
import { LocationsListService } from '../services/locations-list.service';


@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrl: './locations-list.component.css'
})
export class LocationsListComponent {



//PAGINATION
currentPage = 1;
totalPages = 1;
pages: number[] = [];
pageThreshold: number = 3;

//Location 
locations:Location[] = []

constructor(
  private locationService : LocationsListService,
){
  this.refreshLocation();
}



//GET LIST OF LOCATIONS
refreshLocation(pageNumber: number = 1) {
  this.locationService.getLocations(pageNumber).subscribe(
    (data: any) => {
      this.locations = data.data;
      console.log(
        Math.ceil(
          this.locations[0].total_records / this.locations[0].page_size
        )
      );
      this.totalPages = Math.ceil(
        this.locations[0].total_records / this.locations[0].page_size
      );
      this.generatePages();
    },
    (error: any) => {
      console.error('Failed to fetch locations:', error);
    }
  );
}

generatePages(): void {
    console.log('JEANNNN ' + this.totalPages);
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
