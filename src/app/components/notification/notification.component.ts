import { Component, Input } from '@angular/core';
import { NotificationGet } from '../../interfaces/notification-get';
import { NotificationPatch } from '../../interfaces/notification-patch';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {

  ENDPOINT: string = "http://localhost:8080/api/v1/";

  @Input()
  notification!: NotificationGet;
  notificationPatch!: NotificationPatch

  patch(status: string) {
    this.notificationPatch = {
      id: this.notification.id,
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

    fetch(`${this.ENDPOINT}patch`, requestOptions)
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          this.notification.status = status
    });


  }





}
