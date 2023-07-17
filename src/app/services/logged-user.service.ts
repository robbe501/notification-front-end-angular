import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {
  private userId = 10;

  constructor() { }

  getUserId() {
    return this.userId;
  }

  setUserId(userId: number) {
    this.userId = userId;
  }
}
