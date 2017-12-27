import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverComponent } from './popover/popover';
import { PopoverItemComponent } from './popover/popover-item/popover-item';
import { UuidModule } from 'meepo-uuid';
import { PopoverService } from './popover.service';
@NgModule({
    declarations: [
        PopoverComponent,
        PopoverItemComponent
    ],
    imports: [CommonModule, UuidModule],
    exports: [
        PopoverComponent,
        PopoverItemComponent
    ],
    providers: [
        PopoverService
    ],
})
export class PopoverModule { }
export { PopoverComponent } from './popover/popover';
export { PopoverService } from './popover.service';



