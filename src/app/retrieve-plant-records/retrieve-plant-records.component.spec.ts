import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrievePlantRecordsComponent } from './retrieve-plant-records.component';

describe('RetrievePlantRecordsComponent', () => {
  let component: RetrievePlantRecordsComponent;
  let fixture: ComponentFixture<RetrievePlantRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetrievePlantRecordsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RetrievePlantRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
