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
    this.flightsUrl = this.sanitizer.bypassSecurityTrustResourceUrl(environment.app1Url + '/convictions');
    this.bookingUrl = this.sanitizer.bypassSecurityTrustResourceUrl(environment.app1Url + '/claims');
    this.cityUrl = this.sanitizer.bypassSecurityTrustResourceUrl(environment.app2Url + '/personalDetails');
    this.countryUrl = this.sanitizer.bypassSecurityTrustResourceUrl(environment.app2Url + '/addonBundles');
  }
}
