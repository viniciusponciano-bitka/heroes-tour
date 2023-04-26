import { Component } from '@angular/core';
import { MarvelService } from '../marvel.service';
import { HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  page: number = 0;
  total: number = 10;
  lines: number = 20;

  goToPage(page: number) {
    if (page < 0) {
      this.page = 0;
    } else if (page > this.total) {
      this.page = this.total;
    } else {
      this.page = page;
    }
    this.callService();
  }

  constructor(private service: MarvelService) {
    this.callService()
  }

  callService() {
    this.service.getHeroes(this.page, this.lines).subscribe((result) => {
      const isRequestSuccessful = result.code === HttpStatusCode.Ok || result.code === HttpStatusCode.NotModified;

      if (isRequestSuccessful) {
        const { data } = result;

        this.total = data?.total! - 1; 
      }
    });
  }
}
