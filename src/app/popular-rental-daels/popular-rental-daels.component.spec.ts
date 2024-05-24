import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularRentalDaelsComponent } from './popular-rental-daels.component';

describe('PopularRentalDaelsComponent', () => {
  let component: PopularRentalDaelsComponent;
  let fixture: ComponentFixture<PopularRentalDaelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularRentalDaelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularRentalDaelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
