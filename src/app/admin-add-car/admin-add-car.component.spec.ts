import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddCarComponent } from './admin-add-car.component';

describe('AdminAddCarComponent', () => {
  let component: AdminAddCarComponent;
  let fixture: ComponentFixture<AdminAddCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
