import { Component, OnInit } from '@angular/core';
import { AddonBundle, Customer, StoreService } from 'shared-lib';

@Component({
  selector: 'app-addon-bundles',
  templateUrl: './addonBundles.component.html'
})
export class AddonBundlesComponent implements OnInit {
  addonBundle: AddonBundle;
  selectedCustomer: Customer;

  constructor(
    private storeService: StoreService,
  ) { }

  ngOnInit(): void {
    this.storeService.getSelectedCustomerAddonBundle().subscribe(addonBundle => {
      this.addonBundle = addonBundle;
    });

    this.storeService.getSelectedCustomer().subscribe(selectedCustomer => {
      this.selectedCustomer = selectedCustomer;
    });
  }
}
