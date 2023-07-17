import { Component, OnInit } from '@angular/core';
import { NotificationGet } from '../../interfaces/notification-get';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit{

  userId = 10;
  notificationList: NotificationGet[] = [];

  constructor(public dialog: MatDialog, private notificationService: NotificationService) {

  }

  async ngOnInit(){
    this.notificationList = await this.notificationService.getNotifications();
  }

  async refresh() {
    this.notificationList = await this.notificationService.getNotifications();
  }


  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ModalComponent, {
      width: '450px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
