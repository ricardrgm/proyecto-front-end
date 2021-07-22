import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostcardReversePage } from './postcard-reverse.page';

const routes: Routes = [
  {
    path: '',
    component: PostcardReversePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostcardReversePageRoutingModule {}
