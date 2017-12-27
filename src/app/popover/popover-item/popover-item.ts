import { Component, OnInit, Input, Output, EventEmitter, Renderer2, ElementRef } from '@angular/core';
import { PopoverItemService } from '../../popover-item.service';
import { PopoverService } from '../../popover.service';
@Component({
    selector: 'popover-item',
    templateUrl: './popover-item.html'
})
export class PopoverItemComponent implements OnInit {
    _widget: PopoverItemService;
    @Input()
    set widget(val: PopoverItemService) {
        this._widget = val;
    }
    get widget() {
        return this._widget;
    }
    @Input() sn: string;

    @Output() onClose: EventEmitter<any> = new EventEmitter();

    data: any;
    constructor(
        public popover: PopoverService
    ) { }

    ngOnInit() {
        this._widget.sure$.next(this._widget);
    }

    onLoad(){
        
    }
}