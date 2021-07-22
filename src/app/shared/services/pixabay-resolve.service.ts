import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IPixabay } from '../interfaces/pixabay';
import { PixabayService } from './pixabay.service';
import { catchError, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PixabayResolveService implements Resolve<IPixabay> {

  constructor(private pixabayService: PixabayService) {
  }
  // IPixabay | Observable<IPixabay> | Promise<IPixabay>
  resolve(): any {
    return this.pixabayService.getImages$().pipe(
      take(1),
      catchError((error)=>{
        console.log(error)
        return of(error.error)})
    )

  }

}
