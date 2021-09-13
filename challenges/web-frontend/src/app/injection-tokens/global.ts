import {InjectionToken} from "@angular/core";
declare const window: Window;
export const WINDOW = new InjectionToken<Window>('window', {providedIn: 'root', factory: () => window});

declare const localStorage: Storage;
export const LOCAL_STORAGE = new InjectionToken<Storage>('localStorage', {providedIn: 'root', factory: () => localStorage});
