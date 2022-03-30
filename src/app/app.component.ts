import { Component, NgZone } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kaar';
  clicked=false;
constructor (private zone: NgZone, private router: Router,private route:ActivatedRoute) {
  this.router.events.subscribe((event: any) => {
    if (event instanceof NavigationEnd) {
      if (event.url === '/login' || event.url === '/netflix' || event.url === '/netflix/main' || event.url === '/netflix/main/lmovie1'||  event.url === '/netflix/main/lmovie2' || event.url === '/netflix/main/lmovie3'|| event.url === '/netflix/main/lmovie4'|| event.url === '/netflix/main/lmovie5'|| event.url === '/netflix/main/lmovie6'|| event.url === '/netflix/main/lmovie7'|| event.url === '/netflix/main/lmovie8' || event.url=== '/netflix/main/smovie1' || event.url=== '/netflix/main/smovie2'|| event.url=== '/netflix/main/smovie3'|| event.url=== '/netflix/main/smovie4'|| event.url=== '/netflix/main/smovie5'|| event.url=== '/netflix/main/smovie6'|| event.url=== '/netflix/main/smovie7'|| event.url=== '/netflix/main/smovie8' || event.url==='/netflix/main/banner' || event.url==='/netflix/main/series') {
        this.clicked= true;
      } else {
        this.clicked= false;
      }
    }
  });
}
  netflix(){
   
   this.router.navigate(['/netflix'], {relativeTo:this.route});
  

  }
  login(){
   
    this.router.navigate(['/login'], {relativeTo:this.route});
   
  }
}
