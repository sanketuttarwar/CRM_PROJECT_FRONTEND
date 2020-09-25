import { TestBed } from '@angular/core/testing';

import { ResourceResolverService } from './resource-resolver.service';

describe('ResourceResolverService', () => {
  let service: ResourceResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourceResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
