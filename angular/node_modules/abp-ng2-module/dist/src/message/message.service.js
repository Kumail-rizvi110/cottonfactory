var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var MessageService = /** @class */ (function () {
    function MessageService() {
    }
    MessageService.prototype.info = function (message, title, isHtml) {
        return abp.message.info(message, title, isHtml);
    };
    MessageService.prototype.success = function (message, title, isHtml) {
        return abp.message.success(message, title, isHtml);
    };
    MessageService.prototype.warn = function (message, title, isHtml) {
        return abp.message.warn(message, title, isHtml);
    };
    MessageService.prototype.error = function (message, title, isHtml) {
        return abp.message.error(message, title, isHtml);
    };
    MessageService.prototype.confirm = function (message, titleOrCallBack, callback, isHtml) {
        if (typeof titleOrCallBack == 'string') {
            return abp.message.confirm(message, titleOrCallBack, callback, isHtml);
        }
        else {
            return abp.message.confirm(message, undefined, titleOrCallBack, isHtml);
        }
    };
    MessageService = __decorate([
        Injectable()
    ], MessageService);
    return MessageService;
}());
export { MessageService };
//# sourceMappingURL=message.service.js.map