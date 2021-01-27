import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(
    public sanitizer: DomSanitizer,
  ) {
  }

  ngOnInit(): void {
  }

}
