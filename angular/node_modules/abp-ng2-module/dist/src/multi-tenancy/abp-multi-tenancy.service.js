var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var AbpMultiTenancyService = /** @class */ (function () {
    function AbpMultiTenancyService() {
    }
    Object.defineProperty(AbpMultiTenancyService.prototype, "isEnabled", {
        get: function () {
            return abp.multiTenancy.isEnabled;
        },
        enumerable: true,
        configurable: true
    });
    AbpMultiTenancyService = __decorate([
        Injectable()
    ], AbpMultiTenancyService);
    return AbpMultiTenancyService;
}());
export { AbpMultiTenancyService };
//# sourceMappingURL=abp-multi-tenancy.service.js.map