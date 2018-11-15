import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy {
  defaultStyle: string;

  constructor() { }

  ngOnInit() {
    document.getElementById("component-content").classList.add("landingBody");
  }

  ngOnDestroy() {
    document.getElementById("component-content").classList.remove("landingBody");
  }

}
