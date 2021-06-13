import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Article } from '../article';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  articles$!: Observable<Article[]>;
  private searchTerms = new Subject<string>();


  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {

  }


}
