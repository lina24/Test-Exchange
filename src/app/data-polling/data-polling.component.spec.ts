import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPollingComponent } from './data-polling.component';

describe('DataPollingComponent', () => {
  let component: DataPollingComponent;
  let fixture: ComponentFixture<DataPollingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataPollingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
