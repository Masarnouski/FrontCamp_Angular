import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Article } from '../models/article';
import { ApiService } from '../api/api.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.less']
})
export class NewsFormComponent implements OnInit {

  @Input() oldArticle:Article;
  @Output() clickSaveButton = new EventEmitter<Article>();

  public articleFormGroup:FormGroup;
  

  constructor(private fb: FormBuilder) {
    this.oldArticle = this.oldArticle ? this.oldArticle : new Article();
   }

  
  ngOnInit(){
    console.log(this.oldArticle)
    this.articleFormGroup = this.fb.group({
      title: [this.oldArticle.title,Validators.required],
      description: [this.oldArticle.description,Validators.required],
      content: [this.oldArticle.content,Validators.required],
      urlToImage:[this.oldArticle.urlToImage, Validators.required],
      publishedAt:[this.oldArticle.publishedAt,Validators.required],
      author: [this.oldArticle.author,Validators.required],
      url: [this.oldArticle.url,Validators.required]
    })
    // var shortDate = this.oldArticle.publishedAt.toDateString();
    // this.articleFormGroup.patchValue({publishedAt:shortDate})
  }


  onSubmit() {
    const article = new Article();
    article.urlToImage =  this.articleFormGroup.value.urlToImage
    article.title = this.articleFormGroup.value.title;
    article.description = this.articleFormGroup.value.description;
    article.publishedAt = this.articleFormGroup.value.publishedAt;
    article.createdByMe = true;
    article.author = this.articleFormGroup.value.author;
    article.url = this.articleFormGroup.value.url;
    article.content = this.articleFormGroup.value.content;
    console.log("Input from form")
    console.log(article)
    this.clickSaveButton.emit(article);
  }
}
