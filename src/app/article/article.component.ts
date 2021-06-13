import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles: Article[]=[];


  constructor(private articlesService: ArticlesService) { }
  ngOnInit(): void {
    this.getArticles();
  }
  getArticles(): void {
    this.articlesService.getArticles()
    .subscribe(articles => this.articles = articles);
    console.log(this.articles)
  }
}
