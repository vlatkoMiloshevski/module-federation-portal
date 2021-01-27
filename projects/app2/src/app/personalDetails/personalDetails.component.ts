import { Component, OnInit } from '@angular/core';
import { StoreService, PersonalData } from 'shared-lib';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personalDetails.component.html'
})
export class PersonalDetailsComponent implements OnInit {
  personalData: PersonalData;

  constructor(
    private storeService: StoreService,
  ) {
  }

  ngOnInit(): void {
    this.storeService.getSelectedCustomerPersonalData().subscribe(personalData => {
      this.personalData = personalData;
    });
  }
}
