import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'ngx-flip',
  templateUrl: './flip.component.html',
  styleUrls: ['./flip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlipComponent implements OnInit, OnChanges {

  @Input() flip: boolean;
  @ViewChild('flipContainer', { static: true }) private flipContainer;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.rotate();
  }

  ngOnChanges(change: SimpleChanges) {
    if (this.flipContainer !== undefined) {
      this.rotate();
    }
  }

  rotate() {
    if (this.flip) {
      this.renderer.addClass(this.flipContainer.nativeElement, 'rotate');
    } else {
      this.renderer.removeClass(this.flipContainer.nativeElement, 'rotate');
    }

  }

}
