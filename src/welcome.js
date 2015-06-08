import {computedFrom} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {BuildsApi} from './services/builds-api';

@inject(BuildsApi)
export class Welcome{

  builds = null;

  constructor(buildsApi){
    this.buildsApi = buildsApi;
    this.buildsApi
      .get()
      .then(data => {
        this.builds = JSON.parse(data.response).data;
      });
  }

  heading = 'Welcome to the Aurelia Navigation App!';
}
