import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { LocationsFormComponent } from './locations-form/locations-form.component';
import { LocationCardComponent } from './locations-list/location-card/location-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchBarComponent } from './locations-list/search-bar/search-bar.component';
import { FilterComponent } from './locations-list/filter/filter.component';
import { CategoriesComponent } from './locations-form/categories/categories.component';
import { SubcategoriesComponent } from './locations-form/subcategories/subcategories.component';


@NgModule({
  declarations: [
    AppComponent,
    LocationsListComponent,
    LocationsFormComponent,
    LocationCardComponent,
    NavBarComponent,
    SearchBarComponent,
    FilterComponent,
    CategoriesComponent,
    SubcategoriesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
