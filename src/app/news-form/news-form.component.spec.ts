import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatInputModule, MatFormFieldModule, MatRadioModule, MatCardModule } from '@angular/material';
import { NewsFormComponent } from './news-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NewsFormComponent', () => {
  let component: NewsFormComponent;
  let fixture: ComponentFixture<NewsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFormComponent ],
      imports: [
        CommonModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatRadioModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('should send new article', () => {
    component.articleFormGroup.patchValue({
      title: 'TestT',
      description: 'TestD',
      content: 'TestC',
      image: 'TestI',
      data: 'TestDa',
      author: 'TestA',
      url: 'TestU',
      imageType: 'TestIT'
    });

    spyOn(component.clickSaveButton, 'emit');

    component.onSubmit();

    expect(component.clickSaveButton.emit).toHaveBeenCalled();
  });
});
