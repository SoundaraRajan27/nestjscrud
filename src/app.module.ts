import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PaymentRequestController } from './payment-request/payment-request.controller';
import { PaymentRequestService } from './payment-request/payment-request.service';

@Module({
  imports: [UserModule],
  controllers: [AppController, PaymentRequestController],
  providers: [AppService, PaymentRequestService],
})
export class AppModule { }
