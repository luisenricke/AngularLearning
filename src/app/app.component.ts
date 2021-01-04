import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username: string = '@LuisEnricKe';
  numbers: number[] = [1,2,3,4,5,6,7,8,9];
  heros: string[] = ['Ironman', 'Spider-Man', 'Thor', 'Groot', 'Black Widow'];
  PI: number = Math.PI;
  percent: number = 0.1501;
}
