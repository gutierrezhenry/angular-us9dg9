import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <h1>{{name}}</h1>
    <ul class="cards">
      <li
        class="cards_item"
        *ngFor="let character of characters"
        [style]="{'background-image':'url('+character.image+')'}"
      >
        <h3>{{character.name}}</h3>
      </li>
    </ul>
  `,
  styles: [`
    .cards {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }

    .cards_item {
      flex-basis: calc(25% - 15px);
      aspect-ratio: 0.9;
      border-radius: 8px;
      cursor: pointer;
      background-repeat: no-repeat;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      color: white;
      text-shadow: 0px 0px 3px black;
    }
  `],

})
export class App {
  name = 'Rick & Morty';
  apiURL = 'https://rickandmortyapi.com/api/character';
  characters=[]
  constructor(private http: HttpClient) {}
  ngOnInit() { 
    this.http.get(this.apiURL)
    .subscribe((res:any)=> 
    (this.characters=res.results));
    console.log(this.characters)
}

}
bootstrapApplication(App);
