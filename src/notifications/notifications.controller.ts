import { Controller, Post,Get} from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import{ Body } from '@nestjs/common/decorators/http/route-params.decorator';

@Controller('notifications')
export class NotificationsController {
    constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  async sendNotification(@Body() body: { message: string; type: string }) {
    return this.notificationsService.sendNotification(body.message, body.type);
  }

  @Get()
  async getAll() {
    return this.notificationsService.findAll();
  }
}


