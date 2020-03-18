import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAddCarComponent } from './request-add-car.component';

describe('RequestAddCarComponent', () => {
  let component: RequestAddCarComponent;
  let fixture: ComponentFixture<RequestAddCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestAddCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAddCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
