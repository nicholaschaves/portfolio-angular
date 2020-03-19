import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent implements OnInit, OnDestroy {

  navbarOpen: boolean = false;

  showNavBar() {
    this.navbarOpen = !this.navbarOpen;
  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

}