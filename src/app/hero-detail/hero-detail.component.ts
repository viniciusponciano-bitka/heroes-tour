import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  hero: Hero = {
    id: 1,
    name: 'Storm',
    description: 'She has the ability to fully control the weather.',
    modifiedAt: '2016-05-26T11:50:27-0400',
    thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/6/40/526963dad214d.jpg'
  };
}
