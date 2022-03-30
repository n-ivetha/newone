import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NetflixRoutingModule } from './netflix-routing.module';
import { LoginComponent } from './login/login.component';
import { NetfixmainComponent } from './netfixmain/netfixmain.component';
import { HeaderComponent } from './header/header.component';
import { Lmovie1Component } from './lmovies/lmovie1/lmovie1.component';
import { Lmovie2Component } from './lmovies/lmovie2/lmovie2.component';
import { Lmovie3Component } from './lmovies/lmovie3/lmovie3.component';
import { Lmovie4Component } from './lmovies/lmovie4/lmovie4.component';
import { Lmovie5Component } from './lmovies/lmovie5/lmovie5.component';
import { Lmovie6Component } from './lmovies/lmovie6/lmovie6.component';
import { Lmovie7Component } from './lmovies/lmovie7/lmovie7.component';
import { Lmovie8Component } from './lmovies/lmovie8/lmovie8.component';
import { Smovie1Component } from './smovies/smovie1/smovie1.component';
import { Smovie2Component } from './smovies/smovie2/smovie2.component';
import { Smovie3Component } from './smovies/smovie3/smovie3.component';
import { Smovie4Component } from './smovies/smovie4/smovie4.component';
import { Smovie5Component } from './smovies/smovie5/smovie5.component';
import { Smovie6Component } from './smovies/smovie6/smovie6.component';
import { Smovie7Component } from './smovies/smovie7/smovie7.component';
import { Smovie8Component } from './smovies/smovie8/smovie8.component';
import { BannerComponent } from './banner/banner.component';
import { SeriesComponent } from './series/series.component';
import { SeriesnavComponent } from './seriesnav/seriesnav.component';


@NgModule({
  declarations: [
    LoginComponent,
    NetfixmainComponent,
    HeaderComponent,
    Lmovie1Component,
    Lmovie2Component,
    Lmovie3Component,
    Lmovie4Component,
    Lmovie5Component,
    Lmovie6Component,
    Lmovie7Component,
    Lmovie8Component,
    Smovie1Component,
    Smovie2Component,
    Smovie3Component,
    Smovie4Component,
    Smovie5Component,
    Smovie6Component,
    Smovie7Component,
    Smovie8Component,
    BannerComponent,
    SeriesComponent,
    SeriesnavComponent
  ],
  imports: [
    CommonModule,
    NetflixRoutingModule,
    FormsModule
  ]
})
export class NetflixModule { }
