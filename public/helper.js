"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response = (message, data, code, status = true, error = "", env = process?.env?.ENV) => {
    return new Promise((resolve, reject) => {
        let payload = {
            message,
            data,
            code,
            status,
            error,
            env,
        };
        resolve(payload);
    });
};
exports.default = response;
//# sourceMappingURL=helper.js.map