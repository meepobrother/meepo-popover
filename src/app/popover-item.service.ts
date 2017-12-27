import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PopoverItemService {
    widget: any;

    zindex: number = 0;
    sn: string;

    close$: Subject<any> = new Subject();
    sure$: Subject<any> = new Subject();
    constructor(widget: any) {
        this.widget = widget;
    }

    afterClose() {
        return this.close$;
    }

    afterOpen() {
        return this.sure$;
    }
}