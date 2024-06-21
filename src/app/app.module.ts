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
import { ImageUploadComponent } from './locations-form/image-upload/image-upload.component';
import { ImagePreviewComponent } from './locations-form/image-preview/image-preview.component';
import { AddedFeaturesComponent } from './locations-form/added-features/added-features.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


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
    ImageUploadComponent,
    ImagePreviewComponent,
    AddedFeaturesComponent,
    LocationsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
