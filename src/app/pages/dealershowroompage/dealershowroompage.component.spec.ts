import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealershowroompageComponent } from './dealershowroompage.component';

describe('DealershowroompageComponent', () => {
  let component: DealershowroompageComponent;
  let fixture: ComponentFixture<DealershowroompageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealershowroompageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealershowroompageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
