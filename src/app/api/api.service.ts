import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Source } from '../models/source'
import { Response } from '../models/response'
import { Article } from 'src/app/models/article';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const localUrl = "http://localhost:3000/"
const newsPrefix = "news/"
const apiKey = '&apiKey=980e9d4359984b1bb923d5e1043ce9e2';
const baseUrl = 'https://newsapi.org/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getSources() {
    const url = this.createUrl('v2/sources?country=gb');
    return this.http.get<Response<Source[]>>(url).pipe(map((obj => obj.sources)));
  }

  getArticles(id: string, page: number) {
    const url = this.createUrl(`v2/top-headlines?sources=${id}&page=${page}&pageSize=5`);
    return this.http.get<Response<Article[]>>(url).pipe(map(obj => obj.articles));
  }

  getArticleByTitle(title: string) {
    const url = this.createUrl(`v2/top-headlines?q=${title}`);
    return this.http.get<Response<Article[]>>(url).pipe(map(obj => obj.articles));
  }

  private createUrl(details: string) {
    return baseUrl + details + apiKey;
  }

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
}
