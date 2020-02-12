import { TestBed } from '@angular/core/testing';

import { NodeService } from './node-service.service';

describe('NodeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NodeService = TestBed.get(NodeService);
    expect(service).toBeTruthy();
  });
});
