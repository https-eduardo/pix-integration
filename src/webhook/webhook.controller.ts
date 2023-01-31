import { Body, Controller, Post } from '@nestjs/common';
import { ReceiveMessageDto } from './dto/receive-message.dto';
import { WebhookService } from './webhook.service';

@Controller('webhook')
export class WebhookController {
  constructor(private readonly service: WebhookService) { }

  @Post()
  async receiveMessage(@Body() receiveMessageDto: ReceiveMessageDto) {
    return await this.service.handleMessageReceiving(receiveMessageDto);
  }
}
