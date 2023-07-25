import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeBlockComponent } from './exchange-block.component';

describe('ExchangeBlockComponent', () => {
  let component: ExchangeBlockComponent;
  let fixture: ComponentFixture<ExchangeBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
