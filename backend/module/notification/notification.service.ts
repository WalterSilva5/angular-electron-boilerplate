import * as notifier from 'node-notifier';

export class NotificationService {
  public show(message: string): void {
    notifier.notify({
      title: 'Notification',
      message: message
    });
  }
}
