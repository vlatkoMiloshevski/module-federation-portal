import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IAppState, INITIAL_STATE } from './store.model';

@Injectable({
    providedIn: 'root',
})
export class StoreService {
    private appState: IAppState;
    private appStateSubject: Subject<IAppState> = new Subject<IAppState>();

    constructor(
    ) {
        if (!sessionStorage.getItem('appState')) {
            sessionStorage.setItem('appState', JSON.stringify(INITIAL_STATE));
            this.appState = INITIAL_STATE;
        }
        this.appState = JSON.parse(sessionStorage.getItem('appState'));
    }

    public getStateSubject(): Observable<IAppState> {
        setTimeout(() => {
            this.appStateSubject.next(this.appState);
        });
        return this.appStateSubject.asObservable();
    }

    public updateIsStateActive(isStateActive: boolean): void {
        this.appState.isStateActive = isStateActive;
        sessionStorage.setItem('appState', JSON.stringify(this.appState));
        this.appStateSubject.next(this.appState);
    }

    public getIsStateActive = (): boolean => this.getAppState().isStateActive;

    public getAppState(): IAppState {
        return JSON.parse(sessionStorage.getItem('appState'));
    }
}
