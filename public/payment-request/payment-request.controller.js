"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRequestController = void 0;
const common_1 = require("@nestjs/common");
const payment_request_service_1 = require("./payment-request.service");
let PaymentRequestController = class PaymentRequestController {
    constructor(paymentRequestService) {
        this.paymentRequestService = paymentRequestService;
    }
    async paymentRequest(res, body) {
        try {
            const serviceData = await this.paymentRequestService.createPaymentRequest(body);
            console.log(serviceData, 'serviceData----------1');
            return serviceData;
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.PaymentRequestController = PaymentRequestController;
__decorate([
    (0, common_1.Post)("create-payment-request"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentRequestController.prototype, "paymentRequest", null);
exports.PaymentRequestController = PaymentRequestController = __decorate([
    (0, common_1.Controller)('payment-request'),
    __metadata("design:paramtypes", [payment_request_service_1.PaymentRequestService])
], PaymentRequestController);
//# sourceMappingURL=payment-request.controller.js.map