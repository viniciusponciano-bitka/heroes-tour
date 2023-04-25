import { Injectable } from '@angular/core';
import { Environment } from './environment';
import { environment } from './.environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService implements Environment {

  get privateKey() {
    return environment.privateKey;
  }

  get publicKey() {
    return environment.publicKey;
  }
  
  get marvelUrl() {
    return environment.marvelUrl;
  };
}
