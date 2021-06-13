import { Component, OnInit } from '@angular/core';
import { Article} from '../article';
import { ArticlesService } from '../articles.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  articles: Article[]=[];
  activeFilter: boolean = false;
  filterType: any = ['entrevistas', 'analisis', 'reflexiones']


  constructor(private articlesService: ArticlesService) { }
  ngOnInit(): void {
    this.getArticles();
  }
  getArticles(): void {
    this.articlesService.getArticles()
    .subscribe(articles => this.articles = articles);
    console.log(this.articles)
  }

  filterByIntwerviews(): void{
  this.activeFilter = true;
  this.filterType = ['entrevistas']
  }

  filterByAnalysis(): void{
    this.activeFilter = true;
  this.filterType = ['analisis']
}
removeFilter(): void{
  this.activeFilter = false;
}
}
