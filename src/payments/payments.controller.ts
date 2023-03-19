import { Controller, Param, Get } from '@nestjs/common';
import { FindPaymentById } from './dto/find-payment.dto';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly service: PaymentsService) { }

  @Get(':id')
  async getPaymentStatus(@Param() { id }: FindPaymentById) {
    const paymentInfo = await this.service.getPaymentStatus(id);
    return paymentInfo;
  }
}
