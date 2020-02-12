import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { NodeService } from '../api/node-service.service';

@Component({
  selector: 'app-create-panel',
  templateUrl: './create-panel.component.html',
  styleUrls: ['./create-panel.component.less']
})
export class CreatePanelComponent implements OnInit {

  oldArticle: Article;
  title = 'Create';

  constructor(private nodeService: NodeService) {
    this.oldArticle = new Article();
    this.oldArticle.publishedAt = new Date();
  }

  ngOnInit() {
  }

  createNews($event) {
    this.nodeService.createArticles($event).subscribe(resp => {
    });
  }

}
