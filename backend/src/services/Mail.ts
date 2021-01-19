import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const settings = {
   host: process.env.HOST,
   port: Number(process.env.PORT),
   auth: {
      user: process.env.USER,
      pass: process.env.PASS
   }
} as SMTPTransport.Options;

const transporter = nodemailer.createTransport(settings);

export default transporter;