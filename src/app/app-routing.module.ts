import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YoutubeComponent } from './youtube/youtube.component';

import { InicioComponent } from './inicio/inicio.component';
const routes: Routes = [
  {path:'',component:InicioComponent},
  {path:'youtube',component:YoutubeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
