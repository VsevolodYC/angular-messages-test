import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../environments/environment';

export const initConfig = (config: AppConfig) => () => config.load();

@Injectable()
export class AppConfig {
  private _baseHost: string = 'http://localhost:4200';
  private _config: object;
  private _env: object = environment;

  constructor(private _httpClient: HttpClient) {
  }

  getHost(): string {
    if (this._config) {
      return `${this._config['HOST']}:${this._config['PORT']}`;
    }

    return this._baseHost;
  }

  /**
   * Use to get the data found in the second file (config file)
   */
  getConfig(key: string) {
    return this._config[key];
  }

  /**
   * Use to get the data found in the first file (env file)
   */
  getEnv(key: string) {
    return this._env[key];
  }

  /**
   * This method loads "config.[env].json" to get all env's variables (e.g.: 'config.development.json')
   */
  load() {
    let config: Observable<Object>;

    switch (this.getEnv('env')) {
      case 'production':
        config = this._httpClient.get('assets/config/config.config.production.json');

        break;

      case 'development':
        config = this._httpClient.get('assets/config/config.development.json');

        break;

      case 'default':
        console.error('Environment file is not set or invalid');
    }


    if (config) {
      config.subscribe((config) => this._config = config);
    }
  }
}
