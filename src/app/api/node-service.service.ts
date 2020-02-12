import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { HttpClient } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

const localUrl = "http://localhost:3000/"
const newsPrefix = "news"

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  constructor(private http: HttpClient) { }

  postArticle(article: Article) {
    return this.http.post(localUrl + newsPrefix, article);
  }

  getLocalArticles() {
    return this.http.get<Article[]>(localUrl + newsPrefix).pipe(
      map(article => {
        article.forEach(x => x.createdByMe = true)
        return article;
      }))
  }

  getArticleById(id) {
    return this.http.get<Article>(localUrl + newsPrefix + `/${id}`);
  }

  updateArticle(id, article: Article) {
    return this.http.put(localUrl + newsPrefix + `/${id}`, article).pipe(
      catchError(err => {
        return err;
      })
    ).subscribe((data) => {
      return data;
    });
  }
  createArticles(article: Article) {
    return this.http.post(localUrl + newsPrefix, article).pipe(
      catchError(err => {
        return err;
      }));
  }
}
