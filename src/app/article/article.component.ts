import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../article';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles: Article[]=[];
article: Article | undefined;

  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.articlesService.getArticleById(id)
      .subscribe(article => this.article = article);
  }
}
