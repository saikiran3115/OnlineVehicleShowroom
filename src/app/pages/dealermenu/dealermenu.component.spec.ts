import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealermenuComponent } from './dealermenu.component';

describe('DealermenuComponent', () => {
  let component: DealermenuComponent;
  let fixture: ComponentFixture<DealermenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealermenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
