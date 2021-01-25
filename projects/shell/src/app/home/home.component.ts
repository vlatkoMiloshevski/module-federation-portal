import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  flightsUrl: SafeResourceUrl;
  bookingUrl: SafeResourceUrl;
  cityUrl: SafeResourceUrl;
  countryUrl: SafeResourceUrl;

  constructor(
    public sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.flightsUrl = this.sanitizer.bypassSecurityTrustResourceUrl(environment.app1Url + '/flights');
    this.bookingUrl = this.sanitizer.bypassSecurityTrustResourceUrl(environment.app1Url + '/booking');
    this.cityUrl = this.sanitizer.bypassSecurityTrustResourceUrl(environment.app2Url + '/city');
    this.countryUrl = this.sanitizer.bypassSecurityTrustResourceUrl(environment.app2Url + '/country');
  }
}
