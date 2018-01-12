import { Component, OnInit } from '@angular/core';
import {ConsumerService} from '../../services/consumer/consumer.service';
import {IMessage} from '../../interfaces/IMessage';
import {IApiResponse} from '../../interfaces/IApiResponse';

@Component({
  selector: 'app-presenter',
  templateUrl: './presenter.component.html',
  styleUrls: ['./presenter.component.scss'],
  exportAs: 'AppPresenterComponent'
})
/**
 * PresenterComponent
 *
 * This component is used for managing presentation of messages on the DOM tree of a HTML page and
 * managing lifetime of each message.
 */
export class PresenterComponent implements OnInit {
  private _messages: Array<IMessage>;
  private _total: number = 0;
  private _expired: number = 0;

  /**
   * @param {ConsumerService} _consumerService
   */
  constructor(private _consumerService: ConsumerService) {
  }

  ngOnInit() {
    /**
     * This method fires request on server to get message data
     */
    this._consumerService.getMessagesData()
    .subscribe((messagesData: IApiResponse<IMessage>) => ({data: this._messages, total: this._total} = messagesData));
  }

  /**
   * This method returns array of messages
   *
   * @returns {Array<IMessage>}
   */
  get messages(): Array<IMessage> {
    return this._messages;
  }

  /**
   * This method returns amount of messages
   *
   * @returns {number}
   */
  get total(): number {
    return this._total;
  }

  /**
   * This method returns amount of expired messages
   *
   * @returns {number}
   */
  get expired(): number {
    return this._expired;
  }

  /**
   *
   * @param {number} count
   */
  set expired(count: number) {
    this._expired = count;
  }

  /**
   * Catch Event from MessageCard component and increment expired counter
   *
   * @param {boolean} flag
   */
  onExpired(flag: boolean) {
    this.expired = !flag ? this.expired + 1 : this.expired;
  }
}
