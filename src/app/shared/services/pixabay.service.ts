import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { IPixabay } from '../interfaces/pixabay';


@Injectable({
  providedIn: 'root'
})
export class PixabayService {
  // images!: Array<any>;
  images!: IPixabay;


  constructor(private http: HttpClient) { }

  getImages$(): Observable<IPixabay> {
    return this.http.get<IPixabay>(environment.url_images);
   // return this.http.get<IPixabay>(environment.url_test_one_image);
  }
}
