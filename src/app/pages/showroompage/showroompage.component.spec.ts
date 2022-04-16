import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowroompageComponent } from './showroompage.component';

describe('ShowroompageComponent', () => {
  let component: ShowroompageComponent;
  let fixture: ComponentFixture<ShowroompageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowroompageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowroompageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
