import { Component, OnInit, Input } from '@angular/core';
import { Source } from '../models/source'
import { Article } from '../models/article'
import { ApiService } from '../api/api.service'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { discardPeriodicTasks } from '@angular/core/testing';
import { NodeService } from '../api/node-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  @Input() isAdded: boolean;
  createdByMe: boolean;
  sources: Source[];
  sourceId: string;
  articles: Article[];
  originalArticles: Article[];
  title: string;
  articlePage: number;
  filterInput: string;


  // Const
  myTitle: string;
  defaulTitle: string;

  constructor(private apiService: ApiService,
    private nodeService: NodeService) {
    this.myTitle = 'AMASING NEWS';
    this.defaulTitle = 'Please, choose source';
  }

  ngOnInit() {
    this.title = 'Please, choose source';
    this.apiService.getSources().subscribe(
      resp => {
        this.sources = resp;
        console.log(this.sources)
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

  setInitialArticles() {

    this.apiService.getArticles(this.sourceId, 1).subscribe(
      resp => {
        if (resp.length > 0) {
          this.originalArticles = resp;
          this.articles = this.originalArticles;
          this.articlePage = 1;
          this.isAdded = true;
          this.filterInput = '';
          this.createdByMe = false;
        } else {
          alert('NEWS API IS BROKEN');
        }

        this.nodeService.getLocalArticles().subscribe(resp => {
          this.articles.push(...resp);
        })
      });
    console.log(this.articles);
    this.setSourceTitle();
  }

  receiveSourceId($event) {
    this.sourceId = $event;

    this.setInitialArticles();
  }


  receiveGlobalFilter($event) {
    this.filterInput = $event;

    this.globalFilter();
  }

  receiveCreatedByMeFilter($event) {
    this.createdByMe = $event;
    if (this.articles) {
      this.createdByMeFilter(this.createdByMe);
    }
    else {
      this.nodeService.getLocalArticles().subscribe(resp => {
        this.articles = resp;
      })
    }
  }

  globalFilter() {
    if (this.filterInput) {
      this.articles = this.articles.filter(art => art.title.includes(this.filterInput));
    } else {
      this.articles = this.originalArticles;
    }
  }

  createdByMeFilter(selectedOption) {
    if (selectedOption) {
      this.title = this.myTitle;
      this.articles = this.articles ? this.articles.filter(art => art.createdByMe) : null;
    } else {
      this.setSourceTitle();
      this.globalFilter();
    }
  }

  setSourceTitle() {
    if (this.sourceId) {
      this.title = this.sources.find(s => s.id === this.sourceId).name;
    } else {
      this.title = this.defaulTitle;
    }
  }
}
