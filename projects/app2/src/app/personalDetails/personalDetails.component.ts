import { Component, OnInit } from '@angular/core';
import { StoreService, PersonalData, Customer } from 'shared-lib';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personalDetails.component.html'
})
export class PersonalDetailsComponent implements OnInit {
  personalData: PersonalData;
  selectedCustomer: Customer;

  constructor(
    private storeService: StoreService,
  ) {
  }

  ngOnInit(): void {
    this.storeService.getSelectedCustomerPersonalData().subscribe(personalData => {
      this.personalData = personalData;
    });

    this.storeService.getSelectedCustomer().subscribe(selectedCustomer => {
      this.selectedCustomer = selectedCustomer;
    });
  }
}
