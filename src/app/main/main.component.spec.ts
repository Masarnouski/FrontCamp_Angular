import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { ApiService } from '../api/api.service';
import { NodeService } from '../api/node-service.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let newsapiService: ApiService;
  let nodeService: NodeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent ], 
      imports: [HttpClientModule],   
      providers: [ApiService, NodeService],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
