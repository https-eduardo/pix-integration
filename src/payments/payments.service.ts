import { Injectable } from '@nestjs/common';
import * as mercadopago from 'mercadopago';
import { BasicPaymentData } from './payments.interface';

@Injectable()
export class PaymentsService {
  constructor() {
    mercadopago.configurations.setAccessToken(process.env.MP_ACCESS_TOKEN);
  }
  async createPixTestPayment({
    transaction_amount,
    payer_email,
    description,
  }: BasicPaymentData) {
    const paymentData = {
      transaction_amount,
      description,
      payment_method_id: 'pix',
      installments: 1,
      payer: {
        email: payer_email,
      },
    };
    return await mercadopago.payment.create(paymentData);
  }
  async getPaymentStatus(id: number) {
    return await mercadopago.payment.get(id);
  }
}
