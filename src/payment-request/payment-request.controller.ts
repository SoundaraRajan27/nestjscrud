import { Body, Controller, Post, Res } from '@nestjs/common';
import { PaymentRequestService } from './payment-request.service'
import { Response } from 'express'


@Controller('payment-request')
export class PaymentRequestController {
    constructor(private readonly paymentRequestService: PaymentRequestService) { }
    @Post("create-payment-request")
    async paymentRequest(@Res() res: Response, @Body() body: any) {
        try {
            const serviceData = await this.paymentRequestService.createPaymentRequest(body)
            console.log(serviceData, 'serviceData----------1');

            return serviceData
        } catch (error) {
            console.log(error);
        }
    }

}
