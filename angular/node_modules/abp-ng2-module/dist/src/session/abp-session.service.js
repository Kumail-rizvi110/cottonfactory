var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var AbpSessionService = /** @class */ (function () {
    function AbpSessionService() {
    }
    Object.defineProperty(AbpSessionService.prototype, "userId", {
        get: function () {
            return abp.session.userId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbpSessionService.prototype, "tenantId", {
        get: function () {
            return abp.session.tenantId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbpSessionService.prototype, "impersonatorUserId", {
        get: function () {
            return abp.session.impersonatorUserId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbpSessionService.prototype, "impersonatorTenantId", {
        get: function () {
            return abp.session.impersonatorTenantId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbpSessionService.prototype, "multiTenancySide", {
        get: function () {
            return abp.session.multiTenancySide;
        },
        enumerable: true,
        configurable: true
    });
    AbpSessionService = __decorate([
        Injectable()
    ], AbpSessionService);
    return AbpSessionService;
}());
export { AbpSessionService };
//# sourceMappingURL=abp-session.service.js.map