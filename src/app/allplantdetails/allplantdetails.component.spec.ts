import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllplantdetailsComponent } from './allplantdetails.component';

describe('AllplantdetailsComponent', () => {
  let component: AllplantdetailsComponent;
  let fixture: ComponentFixture<AllplantdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllplantdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllplantdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
