import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Buffer } from 'buffer';
import * as crypto from 'crypto';

@Injectable()
export class PaymentRequestService {
    createPaymentRequest(body: any) {
        return new Promise(async (resolve, reject) => {
            try {
                const merchantTransactionId = body.merchantTransactionId
                const data = {
                    "merchantId": body.merchantId,
                    "merchantTransactionId": body.merchantTransactionId,
                    "merchantUserId": body.merchantUserId,
                    "amount": body.amount,
                    "callbackUrl": `https://localhost:3000/api/status/${merchantTransactionId}`,
                    "mobileNumber": body.mobileNumber,
                    "paymentInstrument": {
                        "type": "UPI_COLLECT",
                        "vpa": "ronaldoarun68-1@okicici"
                    }
                }
                const payload = JSON.stringify(data)
                const bufferData = Buffer.from(payload).toString('base64')
                const saltIndex = 1;
                const salt_key = 1
                const string = bufferData + '/pg/v1/pay' + salt_key;
                const sha256 = crypto.createHash('sha256').update(string).digest('hex');
                const checksum = sha256 + '###' + saltIndex;

                const options = {
                    method: 'POST',
                    url: 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay',
                    headers: { accept: 'application/json', 'Content-Type': 'application/json', 'X-VERIFY': checksum },
                    data: {
                        request: bufferData
                    }
                };
                axios.request(options)
                    .then(function (response) {
                        console.log(response.data);
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            } catch (error) {
                console.log(error);
                reject(error)
            }
        })
    }
}
