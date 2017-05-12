import { NgModule } from '@angular/core';

import { IronmanMarvelComponent } from './ironman-marvel.component';

import { MarvelRoutingModule } from './marvel-routing.module';

@NgModule({
  imports: [ MarvelRoutingModule ],
  declarations: [
    IronmanMarvelComponent,
  ]
})
export class MarvelModule { }
