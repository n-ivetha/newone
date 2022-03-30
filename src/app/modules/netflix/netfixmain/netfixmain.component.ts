import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-netfixmain',
  templateUrl: './netfixmain.component.html',
  styleUrls: ['./netfixmain.component.scss']
})
export class NetfixmainComponent implements OnInit {

  constructor(private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  banner(){
    this.router.navigate(['banner'], {relativeTo:this.route});
  }

}
