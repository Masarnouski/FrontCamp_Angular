import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {

  article: Article;

  constructor( private route: ActivatedRoute, private apiService: ApiService) {
    this.article = this.article ? this.article : new Article();
   }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        const title = params.get('title');
        return this.apiService.getArticleByTitle(title);
      })
    ).subscribe(resp => this.article = resp[0]);
  }
}
