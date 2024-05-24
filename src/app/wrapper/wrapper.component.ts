import { Component } from '@angular/core';
import { PopularRentalDaelsComponent } from '../popular-rental-daels/popular-rental-daels.component';
import { HowItWorksComponent } from '../how-it-works/how-it-works.component';
import { WhyChooseUsComponent } from '../why-choose-us/why-choose-us.component';
import { WhatPeopleSayComponent } from '../what-people-say/what-people-say.component';
import { DownloadAppComponent } from '../download-app/download-app.component';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [HowItWorksComponent, PopularRentalDaelsComponent
    , WhyChooseUsComponent, WhatPeopleSayComponent, DownloadAppComponent,
  ],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.scss'
})
export class WrapperComponent {

}
