import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { NotificationPost } from '../../interfaces/notification-post';
import { LoggedUserService } from '../../services/logged-user.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  users = [10, 11, 12, 20, 21, 22]

  constructor(private notificationService: NotificationService) { }

  sendData(receiver: number, text: string) {
    this.notificationService.post(receiver, text, 'pending');
  }

}

