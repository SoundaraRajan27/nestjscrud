"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRequestService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const buffer_1 = require("buffer");
const crypto = require("crypto");
let PaymentRequestService = class PaymentRequestService {
    createPaymentRequest(body) {
        return new Promise(async (resolve, reject) => {
            try {
                const merchantTransactionId = body.merchantTransactionId;
                const data = {
                    "merchantId": body.merchantId,
                    "merchantTransactionId": body.merchantTransactionId,
                    "merchantUserId": body.merchantUserId,
                    "amount": body.amount,
                    "callbackUrl": `https://localhost:3000/api/status/${merchantTransactionId}`,
                    "mobileNumber": "8072956651S",
                    "paymentInstrument": {
                        "type": "UPI_COLLECT",
                        "vpa": "ronaldoarun68-1@okicici"
                    }
                };
                const payload = JSON.stringify(data);
                const bufferData = buffer_1.Buffer.from(payload).toString('base64');
                const saltIndex = 1;
                const salt_key = 1;
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
                axios_1.default.request(options)
                    .then(function (response) {
                    console.log(response.data);
                })
                    .catch(function (error) {
                    console.error(error);
                });
            }
            catch (error) {
                console.log(error);
                reject(error);
            }
        });
    }
};
exports.PaymentRequestService = PaymentRequestService;
exports.PaymentRequestService = PaymentRequestService = __decorate([
    (0, common_1.Injectable)()
], PaymentRequestService);
//# sourceMappingURL=payment-request.service.js.map