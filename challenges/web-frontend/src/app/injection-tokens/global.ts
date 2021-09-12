import {InjectionToken} from "@angular/core";
declare const window: Window;

export const WINDOW = new InjectionToken<Window>('window', {providedIn: 'root', factory: () => window});
