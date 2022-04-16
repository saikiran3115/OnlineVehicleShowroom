import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealershowroomsComponent } from './dealershowrooms.component';

describe('DealershowroomsComponent', () => {
  let component: DealershowroomsComponent;
  let fixture: ComponentFixture<DealershowroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealershowroomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealershowroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
