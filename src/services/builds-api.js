import {WebAPI} from './backend-http';

export class BuildsApi extends WebAPI {

  cache = null;

  get() {
    this.isRequesting = true;

    if (this.cache) {
      return Promise.resolve(this.cache);
    }

    return this
      .http
      .get('api/github_repos')
      .then(response => {
        this.cache = response;
        return response;
      })
  }
}
