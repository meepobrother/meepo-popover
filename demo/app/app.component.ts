import {
  Component, OnInit, ChangeDetectionStrategy,
  ChangeDetectorRef, ViewChild, TemplateRef
} from '@angular/core';
import { PopoverService } from '../../src/app/app';

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
