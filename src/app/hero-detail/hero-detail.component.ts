import { Component } from '@angular/core';
import { Hero } from '../hero';
import { MarvelService } from '../marvel.service';
import { ActivatedRoute } from '@angular/router';
import { HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  hero: Hero = {
    id: -1,
    name: '',
    description: '',
    modifiedAt: '',
    thumbnail: ''
  };

  constructor(private route: ActivatedRoute, private service: MarvelService) {
    const heroId = this.route.snapshot.paramMap.get('heroId');
    this.service.getHero(Number(heroId)).subscribe((result) => {
      const isRequestSuccessful = result.code === HttpStatusCode.Ok || result.code === HttpStatusCode.NotModified;
      if (isRequestSuccessful) {
        const character = result.data?.results?.pop()!;
        this.hero = {
          id: character.id!,
          name: character?.name || `Hero ${character.id!}`,
          description: character?.description,
          modifiedAt: character?.modified || new Date().toISOString(),
          thumbnail: `${character?.thumbnail?.path}.${character.thumbnail?.extension}`
        }
      }
    });
  }
}
