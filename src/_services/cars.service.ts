import { HttpClient } from '@angular/common/http';
import { Injectable, Signal,  } from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop'
import { environment } from '../environments/environment';
import { Carmodle } from '../app/models/carmodle';
import { Observable, Subscribable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private _http:HttpClient) { }


  /**
   * @get
   * @return Carmodle[]
   * */ 

  // getAllCars(){
  //   this._http.get()
  // }

  getAllCars(limitParam?:number){
let queryParams;
    if (limitParam) {
       queryParams={
        limit:limitParam
      }
    }
  return this._http.get<Carmodle[]>(`${environment.baseUrl}/cars`,{params:queryParams});
  }
 
 
  /**
   * @get
   * @return Carmodle[]
   * */ 

  // getAllCars(){
  //   this._http.get()
  // }

  searchCars(limit:number,searchParam?:string){

  return this._http.get<Carmodle[]>(`${environment.baseUrl}/cars`,{params:{'search':`${searchParam}`,'limit':`${limit}`}});
  }

}
