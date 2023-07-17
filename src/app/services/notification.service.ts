import { Injectable } from '@angular/core';
import { NotificationGet } from '../interfaces/notification-get';
import { NotificationPatch } from '../interfaces/notification-patch';
import { NotificationPost } from '../interfaces/notification-post';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  ENDPOINT: string = "http://localhost:8080/api/v1/";
  loggedUserId = 10;

  notificationList: NotificationGet[] = [];

  notificationPatch!: NotificationPatch;

  constructor() { }

  async getNotifications(){
    const response = await fetch(`${this.ENDPOINT}getByDestinatario/${this.loggedUserId}`)
    const json = await response.json();
    return await json.reverse();
  }



  async patch(notificationId: number, status: string) {
    this.notificationPatch = {
      id: notificationId,
      status: ""
    }
    this.notificationPatch.status = status
    const requestOptions: RequestInit = {
      method: 'PATCH',
      mode: "cors",
      body: JSON.stringify(this.notificationPatch),
      headers: {
          "Content-Type": "application/json"
      }
    };

    const response = await fetch(`${this.ENDPOINT}patch`, requestOptions);
    const json = await response.json();
    return status;
  }


  async post(receiver: number, text: string, status: string) {

    var notificationPost: NotificationPost = {
      text: text,
      status: status,
      mittente: this.loggedUserId,
      destinatario: receiver
    }
    const requestOptions: RequestInit = {
      method: 'POST',
      mode: "cors",
      body: JSON.stringify(notificationPost),
      headers: {
          "Content-Type": "application/json"
      }
    };

    const response = await fetch(`${this.ENDPOINT}post`, requestOptions);
    const json = await response.json();
  }
}
