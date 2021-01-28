import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { first } from 'rxjs/operators';
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

  selectAndNavigate(route, selectedCustomerId): void {
    this.storeService.updateSelectedCustomer(selectedCustomerId);
    interval().pipe(first()).subscribe(() => {
      this.router.navigateByUrl(route);
    });
  }
}
