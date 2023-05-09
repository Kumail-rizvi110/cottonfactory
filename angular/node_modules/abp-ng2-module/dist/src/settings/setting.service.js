var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var SettingService = /** @class */ (function () {
    function SettingService() {
    }
    SettingService.prototype.get = function (name) {
        return abp.setting.get(name);
    };
    SettingService.prototype.getBoolean = function (name) {
        return abp.setting.getBoolean(name);
    };
    SettingService.prototype.getInt = function (name) {
        return abp.setting.getInt(name);
    };
    SettingService = __decorate([
        Injectable()
    ], SettingService);
    return SettingService;
}());
export { SettingService };
//# sourceMappingURL=setting.service.js.map