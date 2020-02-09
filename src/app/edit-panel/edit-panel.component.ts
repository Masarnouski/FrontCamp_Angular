import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {formatDate } from '@angular/common'

@Component({
  selector: 'app-edit-panel',
  templateUrl: './edit-panel.component.html',
  styleUrls: ['./edit-panel.component.less']
})
export class EditPanelComponent implements OnInit {


  public headerControl:FormControl = new FormControl('',Validators.required)
  public descriptionControl:FormControl = new FormControl('')
  public contentControl:FormControl = new FormControl('',Validators.required)
  public imageUrlControl:FormControl = new FormControl('')
  public dateControl:FormControl = new FormControl(formatDate(new Date(), 'yyyy-MM-dd', 'en-US'))
  public authorControl:FormControl = new FormControl('')
  public sourceUrlControl:FormControl = new FormControl('')

  public articleFormGroup: FormGroup = new FormGroup({
    header:this.headerControl,
    description: this.descriptionControl,
    content: this.contentControl,
    image:this.imageUrlControl,
    date:this.dateControl,
    author: this.authorControl,
    source: this.sourceUrlControl
  })


  constructor() { }

  ngOnInit() {
  }

  prepopulateForm(){

  }

}
