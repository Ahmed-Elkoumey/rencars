import { AfterContentChecked, Component, OnInit, Signal } from '@angular/core';
import { CarCardComponent } from '../car-card/car-card.component';
import { faArrowRight, faRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { SlicePipe } from '@angular/common';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { toSignal } from '@angular/core/rxjs-interop';
import { CarsService } from '../../_services/cars.service';
import { Carmodle } from '../models/carmodle';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-popular-rental-daels',
  standalone: true,
  imports: [CarCardComponent, FontAwesomeModule, RouterModule, SlicePipe, NgbPagination, ReactiveFormsModule],
  templateUrl: './popular-rental-daels.component.html',
  styleUrl: './popular-rental-daels.component.scss'
})
export class PopularRentalDaelsComponent implements OnInit, AfterContentChecked {
  faRight = faArrowRight;

  page = 1;
  pageSize = 9;


  carsList!: Carmodle[];

  totalCars: any = 0;

  searchControl = new FormControl();

  constructor(private _carsService: CarsService) {

  }

  ngOnInit(): void {
    this._carsService.searchCars(4,'').subscribe(results => this.carsList = results);

    this.searchControl.valueChanges.pipe(
      debounceTime(300), // Wait for the user to stop typing for 300ms
      distinctUntilChanged(), // Only trigger if the value has changed
      switchMap(value => this._carsService.searchCars(4,value)) // Switch to new observable with the search results
    ).subscribe(results => this.carsList = results);
  }

  ngAfterContentChecked() {
    this.totalCars = this.carsList?.length;
  }


}
