import {
  ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, Renderer2, SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'ngx-flip',
  templateUrl: './flip.component.html',
  styleUrls: ['./flip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlipComponent implements OnInit, OnChanges {

  constructor(private renderer: Renderer2) {
  }

  @ViewChild('flipContainer') private flipContainer;
  @Input() flip: boolean;

  ngOnInit() {
    this.rotate();
  }
  ngOnChanges(change: SimpleChanges) {
    this.rotate();
  }
  rotate() {
    if (this.flip) {
      this.renderer.addClass(this.flipContainer.nativeElement, 'rotate');
    } else {
      this.renderer.removeClass(this.flipContainer.nativeElement, 'rotate');
    }

  }

}
