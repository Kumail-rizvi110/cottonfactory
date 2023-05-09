var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var LocalizationService = /** @class */ (function () {
    function LocalizationService() {
    }
    Object.defineProperty(LocalizationService.prototype, "languages", {
        get: function () {
            return abp.localization.languages;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationService.prototype, "currentLanguage", {
        get: function () {
            return abp.localization.currentLanguage;
        },
        enumerable: true,
        configurable: true
    });
    LocalizationService.prototype.localize = function (key, sourceName) {
        return abp.localization.localize(key, sourceName);
    };
    LocalizationService.prototype.getSource = function (sourceName) {
        return abp.localization.getSource(sourceName);
    };
    LocalizationService = __decorate([
        Injectable()
    ], LocalizationService);
    return LocalizationService;
}());
export { LocalizationService };
//# sourceMappingURL=localization.service.js.map