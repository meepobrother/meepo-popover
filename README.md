## popover for angular

```html
<popover></popover>

<ng-template #tpl let-sn>
    <input class="weui-input" type="text" (change)="change($event)">
    <a class="weui-btn weui-btn_primary" (click)="close(sn)">提交</a>
</ng-template>

<a (click)="push()" class="weui-btn weui-btn_primary" style="position: absolute;bottom:0px;left:0px;right:0px;">添加</a>

```


```ts
import {
  Component, OnInit, ChangeDetectionStrategy,
  ChangeDetectorRef, ViewChild, TemplateRef
} from '@angular/core';
import { PopoverService } from 'meepo-popover';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'app';
  id: number = 0;
  value: string;

  @ViewChild('tpl') tpl: TemplateRef<any>;
  constructor(
    public cd: ChangeDetectorRef,
    public popover: PopoverService
  ) { }

  ngOnInit() { }

  push() {
    this.id++;
    let popover = this.popover.create(this.tpl);
    popover.afterClose().subscribe(res => {
      console.log('close', res);
    });
    popover.afterOpen().subscribe(res => {
      console.log('open', res);
    });
  }

  change(e: any) {
    this.value = e.target.value;
  }

  close(e) {
    this.popover.close(e, this.value);
  }
}

```