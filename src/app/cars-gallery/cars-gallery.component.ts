import { AfterContentChecked, ChangeDetectorRef, Component, computed, OnInit, Signal } from '@angular/core';
import { CarCardComponent } from '../car-card/car-card.component';
import { CarsService } from '../../_services/cars.service';
import { Carmodle } from '../models/carmodle';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-cars-gallery',
  standalone: true,
  imports: [CarCardComponent,NgbPaginationModule,SlicePipe],
  templateUrl: './cars-gallery.component.html',
  styleUrl: './cars-gallery.component.scss'
})
export class CarsGalleryComponent implements AfterContentChecked {
  page=1;
  pageSize=9;

  carsList: Signal<Carmodle[] | undefined> = toSignal(this._carsService.getAllCars());
 
  totalCars:any=0;
  
  constructor(private _carsService: CarsService) {
    
  }
  

  ngAfterContentChecked() {
    this.totalCars=this.carsList()?.length;
 }

}
