import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { Lmovie1Component } from './lmovies/lmovie1/lmovie1.component';
import { Lmovie2Component } from './lmovies/lmovie2/lmovie2.component';
import { Lmovie3Component } from './lmovies/lmovie3/lmovie3.component';
import { Lmovie4Component } from './lmovies/lmovie4/lmovie4.component';
import { Lmovie5Component } from './lmovies/lmovie5/lmovie5.component';
import { Lmovie6Component } from './lmovies/lmovie6/lmovie6.component';
import { Lmovie7Component } from './lmovies/lmovie7/lmovie7.component';
import { Lmovie8Component } from './lmovies/lmovie8/lmovie8.component';
import { LoginComponent } from './login/login.component';
import { NetfixmainComponent } from './netfixmain/netfixmain.component';
import { SeriesComponent } from './series/series.component';
import { SeriesnavComponent } from './seriesnav/seriesnav.component';
import { Smovie1Component } from './smovies/smovie1/smovie1.component';
import { Smovie2Component } from './smovies/smovie2/smovie2.component';
import { Smovie3Component } from './smovies/smovie3/smovie3.component';
import { Smovie4Component } from './smovies/smovie4/smovie4.component';
import { Smovie5Component } from './smovies/smovie5/smovie5.component';
import { Smovie6Component } from './smovies/smovie6/smovie6.component';
import { Smovie7Component } from './smovies/smovie7/smovie7.component';
import { Smovie8Component } from './smovies/smovie8/smovie8.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'main',component:NetfixmainComponent
  },
  {
    path:'main/lmovie1',component:Lmovie1Component
  },
  {
    path:'main/lmovie2',component:Lmovie2Component
  },
  {
    path:'main/lmovie3',component:Lmovie3Component
  },
  {
    path:'main/lmovie4',component:Lmovie4Component
  },
  {
    path:'main/lmovie5',component:Lmovie5Component
  },
  {
    path:'main/lmovie6',component:Lmovie6Component
  },
  {
    path:'main/lmovie7',component:Lmovie7Component
  },
  {
    path:'main/lmovie8',component:Lmovie8Component
  },
  {
    path:'main/smovie1',component:Smovie1Component
  },
  {
    path:'main/smovie2',component:Smovie2Component
  },
  {
    path:'main/smovie3',component:Smovie3Component
  },
  {
    path:'main/smovie4',component:Smovie4Component
  },
  {
    path:'main/smovie5',component:Smovie5Component
  },
  {
    path:'main/smovie6',component:Smovie6Component
  },
  {
    path:'main/smovie7',component:Smovie7Component
  },
  {
    path:'main/smovie8',component:Smovie8Component
  },
  {
    path:'main/banner',component:BannerComponent
  },
  {
    path:'main/series',component:SeriesnavComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetflixRoutingModule { }
