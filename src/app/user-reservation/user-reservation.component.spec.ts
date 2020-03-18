import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReservationComponent } from './user-reservation.component';

describe('UserReservationComponent', () => {
  let component: UserReservationComponent;
  let fixture: ComponentFixture<UserReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
