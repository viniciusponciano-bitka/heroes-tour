import { TestBed } from '@angular/core/testing';

import { MarvelService } from './marvel.service';

describe('MarvelService', () => {
  let service: MarvelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelService);
  });

  it('should be created', (done) => {
    expect(service).toBeTruthy();
    const characters = service.getHeroes().subscribe((c) => ({
      id: c.data?.results
    }));
    expect(service.getHeroes).toHaveBeenCalledOnceWith();
  });
});
