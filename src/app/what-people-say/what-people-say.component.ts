import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-what-people-say',
  standalone: true,
  imports: [CarouselModule,FontAwesomeModule],
  templateUrl: './what-people-say.component.html',
  styleUrl: './what-people-say.component.scss',
})
export class WhatPeopleSayComponent {
star=faStar

  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 50,
    navText: ['', ''],
    // autoWidth:true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      }
    },
    nav: true
  }
}
