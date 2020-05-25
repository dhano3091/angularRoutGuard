import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  finalResult: boolean;
  constructor() { }

  checkAccess(result: boolean) {
     this.finalResult = result;
  }

  getAccess(): boolean {
    return this.finalResult;
  }
}
