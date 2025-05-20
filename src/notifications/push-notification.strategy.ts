import { NotificationStrategy } from "./notification-strategy.interface";

export class PushNotification implements NotificationStrategy {
  send(message: string): void {
    console.log(`🔔 Notificacion Push enviado: ${message}`);
  }
}
