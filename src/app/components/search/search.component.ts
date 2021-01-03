import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes: any[]= [];
  search: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private _heroesService: HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe ( params => {
      //console.log(params['text']);
      this.search = params['text'];
      this.heroes = this._heroesService.searchHeroes(params['text']);
      console.log(this.heroes);
    });
  }

}
