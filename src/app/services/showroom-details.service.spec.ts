import { TestBed } from '@angular/core/testing';

import { ShowroomDetailsService } from './showroom-details.service';

describe('ShowroomDetailsService', () => {
  let service: ShowroomDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowroomDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
