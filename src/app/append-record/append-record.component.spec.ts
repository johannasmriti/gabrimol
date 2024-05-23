import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppendRecordComponent } from './append-record.component';

describe('AppendRecordComponent', () => {
  let component: AppendRecordComponent;
  let fixture: ComponentFixture<AppendRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppendRecordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppendRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
