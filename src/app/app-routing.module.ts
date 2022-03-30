import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'login', loadChildren:()=>import('./modules/login/login.module').then(m=>m.LoginModule)
  },
  {
    path:'netflix', loadChildren:()=>import('./modules/netflix/netflix.module').then(m=>m.NetflixModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
