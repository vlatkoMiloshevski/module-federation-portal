import { Injectable } from '@angular/core';
import { Subject, Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddonBundle, Claim, Conviction, Customer, IAppState, INITIAL_STATE, PersonalData } from './store.model';

@Injectable({
    providedIn: 'root',
})
export class StoreService {
    // private appState: IAppState;
    private _appState: BehaviorSubject<IAppState>;
    // private appState$: Observable<IAppState>;

    constructor(
    ) {
        if (!sessionStorage.getItem('appState')) {
            sessionStorage.setItem('appState', JSON.stringify(INITIAL_STATE));
        }

        if (!this._appState) {
            this._appState = new BehaviorSubject<IAppState>(JSON.parse(sessionStorage.getItem('appState')));
            // this.appState$ = this._appState.asObservable();
        }
    }

    // the getter will return the last value emitted in _todos subject
    get appState(): IAppState {
        return this._appState.getValue();
    }


    // assigning a value to this.todos will push it onto the observable
    // and down to all of its subsribers (ex: this.todos = [])
    set appState(val: IAppState) {
        sessionStorage.setItem('appState', JSON.stringify(val));
        this._appState.next(val);
    }

    // get
    public getIsStateActive = (): Observable<boolean> => {
        this.appState = { ...JSON.parse(sessionStorage.getItem('appState')) };
        return this._appState.pipe(map(appState => appState.isStateActive));
    }

    public getSelectedCustomerId = (): Observable<number> => {
        this.appState = { ...JSON.parse(sessionStorage.getItem('appState')) };
        return this._appState.pipe(map(appState => appState.selectedCustomerId));
    }

    public getSelectedCustomer = (): Observable<Customer> => {
        this.appState = { ...JSON.parse(sessionStorage.getItem('appState')) };
        return this._appState.pipe(map(appState => appState.customers.find(customer => customer.id === appState.selectedCustomerId)));
    }

    public getSelectedCustomerClaims = (): Observable<Claim[]> => this.getSelectedCustomer().pipe(map(customer => customer.claims));

    public getSelectedCustomerConvictions = (): Observable<Conviction[]> =>
        this.getSelectedCustomer().pipe(map(customer => customer.convictions))

    public getSelectedCustomerAddonBundle = (): Observable<AddonBundle> =>
        this.getSelectedCustomer().pipe(map(customer => customer.selectedBundle))

    public getSelectedCustomerPersonalData = (): Observable<PersonalData> =>
        this.getSelectedCustomer().pipe(map(customer => {
            return {
                name: customer.name,
                city: customer.city,
                postcode: customer.postcode,
            };
        }))


    public getCustomerList = (): Observable<PersonalData[]> =>
        this._appState.pipe(map(appState => appState.customers.map(customer => {
            return {
                id: customer.id,
                name: customer.name,
                city: customer.city,
                postcode: customer.postcode,
            };
        })))


    // update
    public updateIsStateActive(isStateActive: boolean): void {
        this.appState = { ...this.appState, isStateActive };
    }

    public updateSelectedCustomer(selectedCustomerId: number): void {
        this.appState = { ...this.appState, selectedCustomerId };
    }

}
