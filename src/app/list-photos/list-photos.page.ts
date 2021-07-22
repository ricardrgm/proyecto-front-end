import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPixabay } from '../shared/interfaces/pixabay';


@Component({
  selector: 'app-list-photos',
  templateUrl: './list-photos.page.html',
  styleUrls: ['./list-photos.page.scss'],
})
export class ListPhotosPage implements OnInit {

  images!: IPixabay | undefined;
  constructor(
    private route: ActivatedRoute,
    private router:  Router) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.images = data.images as IPixabay;
      // console.log(data);
      // console.log(this.images);
    });
  }
  clickImage(){
    this.router.navigateByUrl('postcard-reverse');

  }

}
