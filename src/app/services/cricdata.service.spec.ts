import { TestBed } from '@angular/core/testing';

import { CricdataService } from './cricdata.service';

describe('CricdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CricdataService = TestBed.get(CricdataService);
    expect(service).toBeTruthy();
  });
});
