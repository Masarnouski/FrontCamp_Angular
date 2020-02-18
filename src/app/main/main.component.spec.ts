import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { ApiService } from '../api/api.service';
import { NodeService } from '../api/node-service.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Article } from '../models/article';
import { Observable, of } from 'rxjs';

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

  it('should change sourceId', () => {
    spyOn(component, 'setInitialArticles');
    component.receiveSourceId('TestSourceID');
    expect(component.sourceId).toEqual('TestSourceID');
    expect(component.setInitialArticles).toHaveBeenCalled();
  });
  it('should change filterInput', () => {
    spyOn(component, 'globalFilter');
    component.receiveGlobalFilter('TestFilterInput');
    expect(component.filterInput).toEqual('TestFilterInput');
    expect(component.globalFilter).toHaveBeenCalled();
  });


  it('should call newsapiService', () => {
    newsapiService = TestBed.get(ApiService);
    spyOn(newsapiService, 'getArticles').and.returnValue(new Observable<Article[]>());
    component.setInitialArticles();
    expect(newsapiService.getArticles).toHaveBeenCalled();
  });

  it('should call createdByMeFilter', () => {
    newsapiService = TestBed.get(ApiService);
    component.createdByMe = true;
    spyOn(newsapiService, 'getArticles').and.returnValue(new Observable<Article[]>());
    component.loadMore();
    expect(newsapiService.getArticles).toHaveBeenCalled();
  });


  it('should set default title', () => {
    component.setSourceTitle();
    expect(component.title).toEqual('Please, choose source');
  });

  it('should display remote news', () => {
    spyOn(component, 'setSourceTitle');
    spyOn(component, 'globalFilter');

    component.createdByMeFilter(false);

    expect(component.setSourceTitle).toHaveBeenCalled();
    expect(component.globalFilter).toHaveBeenCalled();
  });

});
