import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService, PersonalData, Customer } from 'shared-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  customerList: PersonalData[];
  selectedCustomer: Customer;

  constructor(
    private storeService: StoreService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.storeService.getCustomerList().subscribe(customerList => {
      this.customerList = customerList;
    });

    this.storeService.getSelectedCustomer().subscribe(selectedCustomer => {
      this.selectedCustomer = selectedCustomer;
    });
  }

  selectCustomer(selectedCustomerId: number): void {
    this.storeService.updateSelectedCustomer(selectedCustomerId);
  }
}
