
export interface IAppState {
    theme: THEME;
}

export enum THEME {
    bright,
    dark,
}

export const INITIAL_STATE: IAppState = {
    theme: THEME.bright,
};
