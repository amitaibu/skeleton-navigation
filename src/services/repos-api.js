import {WebAPI} from './backend-http';

export class ReposApi extends WebAPI {

  get() {
    this.isRequesting = true;
    return this.http.get('api/github_repos');
  }
}
