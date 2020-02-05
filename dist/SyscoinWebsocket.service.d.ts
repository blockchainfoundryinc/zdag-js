import { OnDestroy } from '@angular/core';
import { SyscoinWebsocketConfigService } from "./SyscoinWebsocketConfig.service";
import { SyscoinWebsocketConstructorProps } from "./index";
export declare class SyscoinWebsocketService implements OnDestroy {
    private configService;
    private syscoinWebsocket;
    config: SyscoinWebsocketConstructorProps;
    constructor(configService: SyscoinWebsocketConfigService);
    ngOnDestroy(): void;
    txSubject(): import("rxjs").Subject<any>;
    hashBlockSubject(): import("rxjs").Subject<any>;
}
