import { Component } from '@angular/core';
import { Location } from '../models/Location.model';


@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrl: './locations-list.component.css'
})
export class LocationsListComponent {

  dummyLocation: Location[] = [
    {
        locationid: '1',
        lat: 48.8566,
        lng: 2.3522,
        location_attributes: [
            {
                locationAttributeId: '1',
                attributeId: '1',
                display_name: 'Name',
                machine_name: 'name',
                is_translatable: false,
                value: 'Eiffel Tower',
                order: 1
            },
            {
                locationAttributeId: '2',
                attributeId: '2',
                display_name: 'Address',
                machine_name: 'address',
                is_translatable: false,
                value: 'Champ de Mars, 5 Avenue Anatole',
                order: 2
            },
            {
                locationAttributeId: "6ecef2bc-d201-49c5-a97b-1d6aaa9a5663",
                attributeId: "7bf90d6c-5f69-4458-8a32-89b9f5d6786f",
                display_name: "Rating",
                machine_name: "rating",
                is_translatable: false,
                value: "4.2",
                order: 10
            },
        ],
        location_images: [
            { id: '1', image_path: 'https://example.com/eiffel-tower.jpg' }
        ],
        distance_meters: 0,
        total_records: 1,
        page_size: 10,
        page_number: 1,
        subcategories: [
            {
                id: "346a92de-e00e-4aa1-95f4-46224d65a17b",
                display_name: "Aquarium",
                machine_name: "aquarium"
            }
        ],
        categories: []
    },
    {
        locationid: '2',
        lat: 40.6892,
        lng: -74.0445,
        location_attributes: [
            {
                locationAttributeId: '1',
                attributeId: '1',
                display_name: 'Name',
                machine_name: 'name',
                is_translatable: false,
                value: 'Statue of Liberty',
                order: 1
            },
            {
                locationAttributeId: '2',
                attributeId: '2',
                display_name: 'Address',
                machine_name: 'address',
                is_translatable: false,
                value: 'New York, NY 10004, United States',
                order: 2
            },
            {
                locationAttributeId: "6ecef2bc-d201-49c5-a97b-1d6aaa9a5663",
                attributeId: "7bf90d6c-5f69-4458-8a32-89b9f5d6786f",
                display_name: "Rating",
                machine_name: "rating",
                is_translatable: false,
                value: "4.6",
                order: 10
            },
        ],
        location_images: [
            { id: '1', image_path: 'https://example.com/statue-of-liberty.jpg' }
        ],
        distance_meters: 0,
        total_records: 1,
        page_size: 10,
        page_number: 1,
        subcategories: [
            {
                id: "f2c272d4-1522-45d5-a999-407647671b1e",
                display_name: "Monument",
                machine_name: "monument"
            }
        ],
        categories: []
    },
    {
      locationid: '1',
      lat: 48.8566,
      lng: 2.3522,
      location_attributes: [
          {
              locationAttributeId: '1',
              attributeId: '1',
              display_name: 'Name',
              machine_name: 'name',
              is_translatable: false,
              value: 'Eiffel Tower',
              order: 1
          },
          {
              locationAttributeId: '2',
              attributeId: '2',
              display_name: 'Address',
              machine_name: 'address',
              is_translatable: false,
              value: 'Champ de Mars, 5 Avenue Anatole',
              order: 2
          },
          {
              locationAttributeId: "6ecef2bc-d201-49c5-a97b-1d6aaa9a5663",
              attributeId: "7bf90d6c-5f69-4458-8a32-89b9f5d6786f",
              display_name: "Rating",
              machine_name: "rating",
              is_translatable: false,
              value: "4.2",
              order: 10
          },
      ],
      location_images: [
          { id: '1', image_path: 'https://example.com/eiffel-tower.jpg' }
      ],
      distance_meters: 0,
      total_records: 1,
      page_size: 10,
      page_number: 1,
      subcategories: [
          {
              id: "346a92de-e00e-4aa1-95f4-46224d65a17b",
              display_name: "Aquarium",
              machine_name: "aquarium"
          }
      ],
      categories: []
  },
  {
      locationid: '2',
      lat: 40.6892,
      lng: -74.0445,
      location_attributes: [
          {
              locationAttributeId: '1',
              attributeId: '1',
              display_name: 'Name',
              machine_name: 'name',
              is_translatable: false,
              value: 'Statue of Liberty',
              order: 1
          },
          {
              locationAttributeId: '2',
              attributeId: '2',
              display_name: 'Address',
              machine_name: 'address',
              is_translatable: false,
              value: 'New York, NY 10004, United States',
              order: 2
          },
          {
              locationAttributeId: "6ecef2bc-d201-49c5-a97b-1d6aaa9a5663",
              attributeId: "7bf90d6c-5f69-4458-8a32-89b9f5d6786f",
              display_name: "Rating",
              machine_name: "rating",
              is_translatable: false,
              value: "4.6",
              order: 10
          },
      ],
      location_images: [
          { id: '1', image_path: 'https://example.com/statue-of-liberty.jpg' }
      ],
      distance_meters: 0,
      total_records: 1,
      page_size: 10,
      page_number: 1,
      subcategories: [
          {
              id: "f2c272d4-1522-45d5-a999-407647671b1e",
              display_name: "Monument",
              machine_name: "monument"
          }
      ],
      categories: []
  },
  {
    locationid: '1',
    lat: 48.8566,
    lng: 2.3522,
    location_attributes: [
        {
            locationAttributeId: '1',
            attributeId: '1',
            display_name: 'Name',
            machine_name: 'name',
            is_translatable: false,
            value: 'Eiffel Tower',
            order: 1
        },
        {
            locationAttributeId: '2',
            attributeId: '2',
            display_name: 'Address',
            machine_name: 'address',
            is_translatable: false,
            value: 'Champ de Mars, 5 Avenue Anatole',
            order: 2
        },
        {
            locationAttributeId: "6ecef2bc-d201-49c5-a97b-1d6aaa9a5663",
            attributeId: "7bf90d6c-5f69-4458-8a32-89b9f5d6786f",
            display_name: "Rating",
            machine_name: "rating",
            is_translatable: false,
            value: "4.2",
            order: 10
        },
    ],
    location_images: [
        { id: '1', image_path: 'https://example.com/eiffel-tower.jpg' }
    ],
    distance_meters: 0,
    total_records: 1,
    page_size: 10,
    page_number: 1,
    subcategories: [
        {
            id: "346a92de-e00e-4aa1-95f4-46224d65a17b",
            display_name: "Aquarium",
            machine_name: "aquarium"
        }
    ],
    categories: []
},
{
    locationid: '2',
    lat: 40.6892,
    lng: -74.0445,
    location_attributes: [
        {
            locationAttributeId: '1',
            attributeId: '1',
            display_name: 'Name',
            machine_name: 'name',
            is_translatable: false,
            value: 'Statue of Liberty',
            order: 1
        },
        {
            locationAttributeId: '2',
            attributeId: '2',
            display_name: 'Address',
            machine_name: 'address',
            is_translatable: false,
            value: 'New York, NY 10004, United States',
            order: 2
        },
        {
            locationAttributeId: "6ecef2bc-d201-49c5-a97b-1d6aaa9a5663",
            attributeId: "7bf90d6c-5f69-4458-8a32-89b9f5d6786f",
            display_name: "Rating",
            machine_name: "rating",
            is_translatable: false,
            value: "4.6",
            order: 10
        },
    ],
    location_images: [
        { id: '1', image_path: 'https://example.com/statue-of-liberty.jpg' }
    ],
    distance_meters: 0,
    total_records: 1,
    page_size: 10,
    page_number: 1,
    subcategories: [
        {
            id: "f2c272d4-1522-45d5-a999-407647671b1e",
            display_name: "Monument",
            machine_name: "monument"
        }
    ],
    categories: []
},
{
  locationid: '1',
  lat: 48.8566,
  lng: 2.3522,
  location_attributes: [
      {
          locationAttributeId: '1',
          attributeId: '1',
          display_name: 'Name',
          machine_name: 'name',
          is_translatable: false,
          value: 'Eiffel Tower',
          order: 1
      },
      {
          locationAttributeId: '2',
          attributeId: '2',
          display_name: 'Address',
          machine_name: 'address',
          is_translatable: false,
          value: 'Champ de Mars, 5 Avenue Anatole',
          order: 2
      },
      {
          locationAttributeId: "6ecef2bc-d201-49c5-a97b-1d6aaa9a5663",
          attributeId: "7bf90d6c-5f69-4458-8a32-89b9f5d6786f",
          display_name: "Rating",
          machine_name: "rating",
          is_translatable: false,
          value: "4.2",
          order: 10
      },
  ],
  location_images: [
      { id: '1', image_path: 'https://example.com/eiffel-tower.jpg' }
  ],
  distance_meters: 0,
  total_records: 1,
  page_size: 10,
  page_number: 1,
  subcategories: [
      {
          id: "346a92de-e00e-4aa1-95f4-46224d65a17b",
          display_name: "Aquarium",
          machine_name: "aquarium"
      }
  ],
  categories: []
},
{
  locationid: '2',
  lat: 40.6892,
  lng: -74.0445,
  location_attributes: [
      {
          locationAttributeId: '1',
          attributeId: '1',
          display_name: 'Name',
          machine_name: 'name',
          is_translatable: false,
          value: 'Statue of Liberty',
          order: 1
      },
      {
          locationAttributeId: '2',
          attributeId: '2',
          display_name: 'Address',
          machine_name: 'address',
          is_translatable: false,
          value: 'New York, NY 10004, United States',
          order: 2
      },
      {
          locationAttributeId: "6ecef2bc-d201-49c5-a97b-1d6aaa9a5663",
          attributeId: "7bf90d6c-5f69-4458-8a32-89b9f5d6786f",
          display_name: "Rating",
          machine_name: "rating",
          is_translatable: false,
          value: "4.6",
          order: 10
      },
  ],
  location_images: [
      { id: '1', image_path: 'https://example.com/statue-of-liberty.jpg' }
  ],
  distance_meters: 0,
  total_records: 1,
  page_size: 10,
  page_number: 1,
  subcategories: [
      {
          id: "f2c272d4-1522-45d5-a999-407647671b1e",
          display_name: "Monument",
          machine_name: "monument"
      }
  ],
  categories: []
}
];


}
