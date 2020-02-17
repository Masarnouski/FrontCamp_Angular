import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePanelComponent } from './create-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CreatePanelComponent', () => {
  let component: CreatePanelComponent;
  let fixture: ComponentFixture<CreatePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePanelComponent ],
      imports: [HttpClientModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
