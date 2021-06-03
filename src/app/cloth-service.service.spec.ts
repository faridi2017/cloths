import { TestBed } from '@angular/core/testing';

import { ClothServiceService } from './cloth-service.service';

describe('ClothServiceService', () => {
  let service: ClothServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClothServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
