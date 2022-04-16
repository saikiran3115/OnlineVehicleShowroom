import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealermenupageComponent } from './dealermenupage.component';

describe('DealermenupageComponent', () => {
  let component: DealermenupageComponent;
  let fixture: ComponentFixture<DealermenupageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealermenupageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealermenupageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
