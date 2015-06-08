import {computedFrom} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {ReposApi} from './services/repos-api';

@inject(ReposApi)
export class Welcome{

  repos = null;

  constructor(reposApi){
    this.reposApi = reposApi;
    this.repos = this.reposApi.get();
  }

  heading = 'Welcome to the Aurelia Navigation App!';
}

export class UpperValueConverter {
  toView(value){
    return value && value.toUpperCase();
  }
}
