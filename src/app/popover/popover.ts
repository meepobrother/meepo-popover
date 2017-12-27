import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { PopoverItemService } from '../popover-item.service';
import { UuidService } from 'meepo-uuid';
import { PopoverService } from '../popover.service';
@Component({
    selector: 'popover',
    templateUrl: './popover.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./popover.scss']
})
export class PopoverComponent implements OnInit {
    constructor(
        public popover: PopoverService
    ) { }
    ngOnInit() { }
}