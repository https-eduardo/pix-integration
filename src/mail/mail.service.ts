import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { SendMailParams } from './mail.interface';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_AWS_HOST,
      port: 587,
      auth: {
        user: process.env.MAIL_AWS_USER,
        pass: process.env.MAIL_AWS_PASS,
      },
    });
  }

  sendMail({ html, subject, to }: SendMailParams) {
    return this.transporter.sendMail({
      from: `"Pix Integration" ${process.env.MAIL_AWS_SENDER}`,
      to,
      subject,
      html,
    });
  }
}
