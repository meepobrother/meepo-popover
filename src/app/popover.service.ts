import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { PopoverItemService } from './popover-item.service';
import { UuidService } from 'meepo-uuid';
@Injectable()
export class PopoverService {
    data$: Subject<any> = new Subject();
    close$: Subject<any> = new Subject();

    items: PopoverItemService[] = [];
    zindex: number = 20;
    constructor(
        public uuid: UuidService
    ) { }

    create(tpl) {
        let sn = this.uuid.v1();
        let zindex = this.items.length + this.zindex;
        let widget = { ...{ tpl: tpl }, ...{ sn: sn, zindex: zindex } };
        let popover = new PopoverItemService(widget);
        popover.sn = sn;
        popover.zindex = zindex;
        this.items.push(popover);
        return popover;
    }

    close(e: PopoverItemService, data?: any) {
        let sn = e.sn;
        this.items.map((item, key) => {
            if (item.sn === sn) {
                this.items.splice(key, 1);
            }
        });
        e.close$.next(data);
    }
}