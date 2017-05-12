import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IronmanMarvelComponent } from './ironman-marvel.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Marvel'
    },
    children: [
      {
        path: 'ironman-marvel',
        component: IronmanMarvelComponent,
        data: {
          title: 'Iron Man'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarvelRoutingModule {}
