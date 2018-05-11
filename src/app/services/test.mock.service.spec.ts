import { TestBed, inject } from '@angular/core/testing';

import { TestMockService } from './test.mock.service';

describe('TestMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestMockService]
    });
  });

  it('should be created', inject([TestMockService], (service: TestMockService) => {
    expect(service).toBeTruthy();
  }));
});
