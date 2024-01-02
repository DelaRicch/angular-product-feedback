import { TestBed } from '@angular/core/testing';

import { ButtonValueService } from './button-value.service';

describe('ButtonValueService', () => {
  let service: ButtonValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
