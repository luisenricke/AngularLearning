import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  searchHeroe(text: string) {
    //console.log(text);
    this.router.navigate( ['/search', text] );
  }

  searchKeyEnterHeroe(event: KeyboardEvent, text: string) {
    //console.log(text);
    if (event.key === 'Enter') {
      //console.log($event.key); // Enter
      this.router.navigate( ['/search', text] );
    }

  }

}
