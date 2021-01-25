import { Component, OnInit } from '@angular/core';
import { AuthLibService } from './auth-lib.service';

@Component({
  selector: 'lib-auth-lib',
  template: `
    <p>
      Welcome {{username}}
    </p>
  `,
  styles: [
  ]
})
export class AuthLibComponent implements OnInit {

  constructor(private service: AuthLibService) {
    this.service.login('User');
  }

  ngOnInit(): void {
  }

  public get username(): string {
    return this.service.user;
  }

}
