import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {formatDate } from '@angular/common'
import { ApiService } from '../api/api.service';
import { Article } from '../models/article';
import { SessionService } from '../services/sessionService';
import {ActivatedRoute} from '@angular/router';

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
    title:this.headerControl,
    description: this.descriptionControl,
    content: this.contentControl,
    urlToImage:this.imageUrlControl,
    publishedAt:this.dateControl,
    author: this.authorControl,
    url: this.sourceUrlControl
  })


  constructor(private apiService: ApiService, private route:ActivatedRoute
    ) { }

    article:Article;

  ngOnInit() {
   
    this.route.queryParams.subscribe(params => {
      console.log(params["Article"]);
      this.article = JSON.parse(params["Article"]);
    });
    (<FormGroup>this.articleFormGroup)
    .setValue(this.article, {onlySelf: true});
  }

  prepopulateForm(){

  }
  saveArticle(article: Article){
    console.log(article);
    this.apiService.postArticle(article).subscribe();
  }

}
