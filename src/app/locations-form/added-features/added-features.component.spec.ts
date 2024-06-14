import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedFeaturesComponent } from './added-features.component';

describe('AddedFeaturesComponent', () => {
  let component: AddedFeaturesComponent;
  let fixture: ComponentFixture<AddedFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddedFeaturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddedFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
