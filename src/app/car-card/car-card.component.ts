import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faPerson, faArrowRightLong, faCar } from '@fortawesome/free-solid-svg-icons';
import { Carmodle } from '../models/carmodle';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [FontAwesomeModule,CurrencyPipe],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.scss'
})
export class CarCardComponent implements OnInit {
 @Input() carProps!: Carmodle;

  star = faStar
  faCar = faCar
  right = faArrowRightLong
  randNum!: number;


  ngOnInit(): void {
  this.randNum= this.generateRandomNumber(1,100)
}

   generateRandomNumber(min: number = 0, max: number = 1): number {
    let randomNum= Math.random() * (max - min) + min;
    return Math.round(randomNum)
}

}
