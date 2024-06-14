import { Category } from "./Category.model";
import { LocationAttribute } from "./LocationAttribute.model";
import { LocationImage } from "./LocationImage.model";
import { Subcategory } from "./Subcategory.model";

export interface Location {
    locationid: string;
    lat: number;
    lng: number;
    location_attributes: LocationAttribute[];
    location_images: LocationImage[];
    distance_meters: number;
    total_records: number;
    page_size: number;
    page_number: number;
    subcategories: Subcategory[];
    categories: Category[];
  }