import { Component, OnInit } from '@angular/core';
import { Claim, Customer, StoreService } from 'shared-lib';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html'
})
export class ClaimsComponent implements OnInit {
  claims: Claim[];
  selectedCustomer: Customer;

  constructor(
    private storeService: StoreService,
  ) {
  }

  ngOnInit(): void {
    this.storeService.getSelectedCustomerClaims().subscribe(claims => {
      this.claims = claims;
    });
    
    this.storeService.getSelectedCustomer().subscribe(selectedCustomer => {
      this.selectedCustomer = selectedCustomer;
    });
  }

}
