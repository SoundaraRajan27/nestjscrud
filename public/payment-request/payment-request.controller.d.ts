import { PaymentRequestService } from './payment-request.service';
import { Response } from 'express';
export declare class PaymentRequestController {
    private readonly paymentRequestService;
    constructor(paymentRequestService: PaymentRequestService);
    paymentRequest(res: Response, body: any): Promise<unknown>;
}
