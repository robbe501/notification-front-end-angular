import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { NotificationPost } from '../../interfaces/notification-post';
import { LoggedUserService } from '../../services/logged-user.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  ENDPOINT: string = "http://localhost:8080/api/v1/";

  users = [10, 11, 12, 20, 21, 22]

  constructor(private loggedUser: LoggedUserService) { }

  sendData(receiver: string, text: string) {
    console.log(receiver + " " + text)

    var notificationPost: NotificationPost = {
      text: text,
      status: "pending",
      mittente: this.loggedUser.getUserId(),
      destinatario: parseInt(receiver)
    }
    const requestOptions: RequestInit = {
      method: 'POST',
      mode: "cors",
      body: JSON.stringify(notificationPost),
      headers: {
          "Content-Type": "application/json"
      }
    };

    fetch(`${this.ENDPOINT}post`, requestOptions)
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
    });
  }
}

