import { TestBed } from '@angular/core/testing';

import { NodeService } from './node-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';


let httpClient: HttpClient;
let httpTestingController: HttpTestingController;

let service: NodeService;

describe('NodeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = new NodeService(httpClient);
});


  it('should be created', () => {
    const service: NodeService = TestBed.get(NodeService);
    expect(service).toBeTruthy();
  });
});
