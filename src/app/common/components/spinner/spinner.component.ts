import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  exportAs: 'AppSpinnerComponent'
})
export class SpinnerComponent implements OnInit {
  @Input()
  public color: string = 'primary';

  @Input()
  public mode: string = 'indeterminate';

  @Input()
  public visible: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }
}
