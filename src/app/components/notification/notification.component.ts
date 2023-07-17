import { Component, Input } from '@angular/core';
import { NotificationGet } from '../../interfaces/notification-get';
import { NotificationPatch } from '../../interfaces/notification-patch';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {

  @Input()
  notification!: NotificationGet;

  notificationPatch!: NotificationPatch

  constructor(private notificationService: NotificationService) {

  }

  async patch(status: string) {
    this.notification.status = await this.notificationService.patch(this.notification.id, status);
    this.notificationService.post(this.notification.mittente, 'Notification ' + status, status);
  }


}





