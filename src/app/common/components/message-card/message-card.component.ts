import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange} from '@angular/core';
import {MessageTypes} from '../../enums/message-types.enum';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss'],
  exportAs: 'AppMessageCardComponent'
})
export class MessageCardComponent implements OnChanges, OnInit {
  @Input()
  public content: string;

  @Input()
  public type: string;

  @Input()
  public expiredAt: number;

  @Output()
  public onExpired: EventEmitter<boolean> = new EventEmitter<boolean>();

  private _visible: boolean = true;

  public timeout;

  constructor() {
  }

  /**
   * Watches expired at field in data and kills the message in DOM tree
   */
  ngOnChanges(changes: {[key: string]: SimpleChange}) {
    if (changes['expiredAt']) {
      const expired = this.expiredAt - new Date().getTime();

      this.timeout = setTimeout(() => this.visible = false, expired > 0 ? expired : 0);
    }
  }

  ngOnInit() {
  }

  get visible(): boolean {
    return this._visible;
  }

  /**
   * Emits Event for Present component on message expire
   *
   * @param {boolean} flag
   */
  set visible(flag: boolean) {
    this.onExpired.emit(this._visible = flag);
  }

  /**
   * This method returns enums types for message type field
   *
   * @returns {MessageTypes}
   * @constructor
   */
  get MessageTypes() {
    return MessageTypes;
  }
}
