
export enum AddonBundle {
    basic,
    medium,
    premium,
}

export interface Claim {
    name: string;
}

export interface Conviction {
    name: string;
}

export interface Customer {
    id: number;
    name: string;
    city: string;
    postcode: string;
    claims: Claim[];
    convictions: Conviction[];
    selectedBundle: AddonBundle;
}

export interface IAppState {
    isStateActive: boolean;
    customers: Customer[];
    selectedCustomerId: number;
}

export interface PersonalData {
    id?: number;
    name: string;
    city: string;
    postcode: string;
}

export const INITIAL_STATE: IAppState = {
    isStateActive: false,
    selectedCustomerId: 1,
    customers: [{
        id: 1,
        name: 'Customer X',
        city: 'London',
        postcode: 'ABC 123',
        claims: [{
            name: 'claim 1',
        }, {
            name: 'claim 11',
        }, {
            name: 'claim 111',
        }],
        convictions: [{
            name: 'convictions 1',
        }, {
            name: 'convictions 11',
        }, {
            name: 'convictions 111',
        }],
        selectedBundle: AddonBundle.basic,
    },
    {
        id: 2,
        name: 'Customer Y',
        city: 'Liverpool',
        postcode: 'PSX 321',
        claims: [{
            name: 'claim 2',
        }, {
            name: 'claim 22',
        }, {
            name: 'claim 222',
        }],
        convictions: [{
            name: 'convictions 2',
        }, {
            name: 'convictions 22',
        }, {
            name: 'convictions 222',
        }],
        selectedBundle: AddonBundle.medium,
    },
    {
        id: 3,
        name: 'Customer Z',
        city: 'Manchester',
        postcode: 'TSV 576',
        claims: [{
            name: 'claim 3',
        }, {
            name: 'claim 33',
        }, {
            name: 'claim 333',
        }],
        convictions: [{
            name: 'convictions 3',
        }, {
            name: 'convictions 33',
        }, {
            name: 'convictions 333',
        }],
        selectedBundle: AddonBundle.premium,
    }],
};
