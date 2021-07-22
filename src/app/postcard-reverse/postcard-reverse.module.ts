import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostcardReversePageRoutingModule } from './postcard-reverse-routing.module';

import { PostcardReversePage } from './postcard-reverse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostcardReversePageRoutingModule
  ],
  declarations: [PostcardReversePage]
})
export class PostcardReversePageModule {}
