import { Observable, Subject } from "rxjs";

export interface DebugWatcher {
    interval: any;
    observer:  any;
    debugStatus: boolean;
}

export interface DebuggingService {
    deviceId: string;
    enableDebugging(): Observable<boolean>;
    disableDebugging(): Observable<boolean>;
    isDebugOn(): boolean;
}