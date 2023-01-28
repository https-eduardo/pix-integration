import { Body, Controller, Post } from '@nestjs/common';
import { WebhookService } from './webhook.service';

@Controller('webhook')
export class WebhookController {
  constructor(private readonly service: WebhookService) { }

  @Post()
  async receiveMessage(@Body() body: any) {
    console.log(body);
    return {};
  }
}
