import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

export class WebAPI {

  constructor(http){
    this.http = new HttpClient();

    this.http
      .configure(x => {
        x.withBaseUrl('http://localhost/shoov/www');
        x.withHeader('access-token', localStorage.getItem('access_token'));
    });
  }
}
