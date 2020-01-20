import { Component, OnInit, Input } from '@angular/core';
import { Source } from '../models/source'
import { Article } from '../models/article'
import { ApiService } from '../api/api.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  @Input() isAdded: boolean;
  sourceId: string;
  articles: Article[];
  sources: Source[];
  title: string;
  articlePage: number;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.title = 'Please, choose source';
    this.apiService.getSources().subscribe(
      resp => {
        this.sources = resp;
        console.log( this.sources)
      }
    );
  }

  onChangeObj(selectedSource) {
    console.log("HERE")
    console.log(selectedSource)
    this.sourceId = selectedSource.value
    this.apiService.getArticles(this.sourceId, 1).subscribe(
      resp => {
        if (resp.length > 0) {
          this.articles = resp;
          this.articlePage = 1;
          this.isAdded = true;
        } else {
          alert('NEWS API IS BROKEN');
        }
      }
    );

    this.title = this.sources.find(s => s.id === this.sourceId).name;
  }

  loadMore() {
    this.articlePage++;
    this.apiService.getArticles(this.sourceId, this.articlePage).subscribe(
      resp => {
        if (resp.length > 0) {
          this.articles.push(...resp);
        } else {
          this.isAdded = false;
        }
      }
    );
  }
}
