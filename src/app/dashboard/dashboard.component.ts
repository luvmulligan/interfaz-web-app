import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute, RouterEvent } from '@angular/router';
import { Article} from '../article';
import { ArticlesService } from '../articles.service';

// @Pipe({
//   name: 'filterHeros'
// })
// export class FilterArticlePipe {
//   public transform(articles: Article[], filter: string) {
//     if (!articles || !articles.length) return [];
//     if (!filter) return articles;
//     return articles.filter(h => h.type.toLowerCase().indexOf(filter.toLowerCase()) >= 0);
//   }
// }

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  articles: Article[]=[];
  interviews: any=[];
  activeInterviewFilter: boolean = false;
  filteredItems: Article[] = [...this.articles];
  removedFilter: boolean = true;
  showInterviews: boolean = false;
  showAnalysis: boolean = false;
  showReviews: boolean = false;
  Interviews = [];
  Analysis = [];
  Reviews = [];


  constructor(private articlesService: ArticlesService,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getArticles();
    this.getInterviews();
  }


  reset() {
    this.filteredItems = [...this.articles];
  }

  getArticles(): void {
    this.articlesService.getArticles()
    .subscribe(articles => this.articles = articles);
    console.log(this.articles)

  }

  getInterviews(): void{
  Object.keys(this.articles);

  }

  getAnalysis(): void{
    this.articles.filter(function(article) {
      return article.type === 'reflexion';

  });
  }

  getReviews(): void{
    this.articles.filter(function(article) {
      return article.type === 'reseña';
  });
  }

  filterByType() {
    const Articles = Object.keys(this.articles);
    let Interviews = [];
    let Analysis = [];
    let Reviews = [];
  //   if (this.article.type === 'entrevista') {
  //     Interviews.push(this.article)
  //     console.log(Interviews);

  //   }
  //   else if (this.article.type === 'reflexion'){
  //     Analysis.push(this.article)
  //     console.log(Analysis)
  //   }
  //   else if(this.article.type === 'reseña'){
  //     Reviews.push(this.article)
  //     console.log(Reviews)
  //   }
  // }

}}
