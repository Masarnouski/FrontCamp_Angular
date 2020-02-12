import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { ApiService } from '../api/api.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { NodeService } from '../api/node-service.service';



@Component({
  selector: 'app-edit-panel',
  templateUrl: './edit-panel.component.html',
  styleUrls: ['./edit-panel.component.less']
})
export class EditPanelComponent implements OnInit {
  oldArticle:Article
  articleId:string;
  title = 'Edit'

  constructor(private nodeService: NodeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        this.articleId = id;
        return this.nodeService.getArticleById(id);
      })
    ).subscribe(resp => this.oldArticle = resp);
  }

  prepopulateForm(){
  }
  updateNews($event){
    console.log("next")
    console.log( $event)
    this.nodeService.updateArticle(this.articleId, $event);
  }

}
