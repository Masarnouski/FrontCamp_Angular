import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from './news-card/news-card.component'
import { FilterComponent } from './filter/filter.component'
import { AppRoutingModule } from '../app-routing.module';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatCheckboxModule,
  MatSelectModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main.component';



@NgModule({
  declarations: [
    FilterComponent,
    NewsCardComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatCheckboxModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
