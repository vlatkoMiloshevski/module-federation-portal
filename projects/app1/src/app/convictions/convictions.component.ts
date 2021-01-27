import { Component, OnInit } from '@angular/core';
import { Conviction, Customer, StoreService } from 'shared-lib';

@Component({
  selector: 'app-convictions',
  templateUrl: './convictions.component.html'
})
export class ConvictionsComponent implements OnInit {
  convictions: Conviction[];
  selectedCustomer: Customer;

  constructor(
    private storeService: StoreService,
  ) {

  }

  ngOnInit(): void {
    this.storeService.getSelectedCustomerConvictions().subscribe(convictions => {
      this.convictions = convictions;
    });

    this.storeService.getSelectedCustomer().subscribe(selectedCustomer => {
      this.selectedCustomer = selectedCustomer;
    });
  }
}
