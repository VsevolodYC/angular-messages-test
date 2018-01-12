import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from '../../../app.config';
import {IApiResponse} from '../../interfaces/IApiResponse';
import {IMessage} from '../../interfaces/IMessage';
import {Observable} from 'rxjs/Observable';

@Injectable()
/**
 * ConsumerService
 *
 * This service is used for pulling message data and interacting with the Presenter component
 */
export class ConsumerService {
  private _url: string = this._appConfig.getHost();

  constructor(private _httpClient: HttpClient,
              private _appConfig: AppConfig) {
  }

  /**
   *
   * @returns {Observable<IApiResponse<IMessage>>}
   */
  getMessagesData(): Observable<IApiResponse<IMessage>> {
    return this._httpClient.get<IApiResponse<IMessage>>(this.messagesUrl);
  }

  /**
   * This method returns url for getting messages data
   *
   * @returns {string}
   */
  get messagesUrl(): string {
    return `${this._url}/assets/data/messages.json`;
  }
}
