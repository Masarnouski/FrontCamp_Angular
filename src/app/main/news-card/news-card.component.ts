import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Router, NavigationExtras } from '@angular/router';
import { SessionService } from 'src/app/services/sessionService';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {

  @Input() article: Article;

  constructor() { }

  ngOnInit() {
  }
}
