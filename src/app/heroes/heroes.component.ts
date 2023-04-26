import { Component } from '@angular/core';
import { Hero } from '../hero';
import { MarvelService } from '../marvel.service';
import { HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes: Hero[] = [];

  constructor(private heroService: MarvelService) {
    heroService.getHeroes().subscribe((characters) => {
      const isRequestSuccessful = characters.code === HttpStatusCode.Ok || characters.code === HttpStatusCode.NotModified;
      if (isRequestSuccessful && characters.data?.results) {
        for (let character of characters.data?.results) {
          if (character.id && character.name) {
            const hero = {
              id: character.id,
              name: character.name
            }

            this.heroes.push(hero);
          }
        }
      }
    });
  }
}
