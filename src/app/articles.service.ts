import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  public url: string =  'http://localhost:3000/articles';

  articles: Article[] = [];

  constructor( private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.url)
    }

    getArticleById(id: number): Observable<Article> {
      const url = `${this.url}/${id}`;
      return this.http.get<Article>(url);
    }
}
