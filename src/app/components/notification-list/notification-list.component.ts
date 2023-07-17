import { Component } from '@angular/core';
import { NotificationGet } from '../../interfaces/notification-get';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent {

  userId = 10;
  notificationList: NotificationGet[] = [];

  ENDPOINT: string = "http://localhost:8080/api/v1/";

  constructor(private loggedUser: LoggedUserService, public dialog: MatDialog) {
    console.log(loggedUser.getUserId())
    fetch(`${this.ENDPOINT}getByDestinatario/${this.loggedUser.getUserId()}`)
        .then((res) => res.json())
        .then((json) => {
          this.notificationList = json;
        });
  }

  refresh() {
    fetch(`${this.ENDPOINT}getByDestinatario/${this.loggedUser.getUserId()}`)
        .then((res) => res.json())
        .then((json) => {
          this.notificationList = json;
    });
  }


  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ModalComponent, {
      width: '450px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
