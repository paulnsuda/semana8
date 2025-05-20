import { NotificationStrategy } from "./notification-strategy.interface";

export class NotificationContext {
  private strategy: NotificationStrategy;

  setStrategy(strategy: NotificationStrategy) {
    this.strategy = strategy;
  }

  executeStrategy(message: string) {
if(!this.strategy){
    throw new Error("no se ha definido una estrategia de notificacion");
}
    this.strategy.send(message);

  }
}
