import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { LocationsFormComponent } from './locations-form/locations-form.component';
import { LocationCardComponent } from './locations-list/location-card/location-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchBarComponent } from './locations-list/search-bar/search-bar.component';
import { FilterComponent } from './locations-list/filter/filter.component';


@NgModule({
  declarations: [
    AppComponent,
    LocationsListComponent,
    LocationsFormComponent,
    LocationCardComponent,
    NavBarComponent,
    SearchBarComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
