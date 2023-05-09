var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { AbpSessionService } from './session/abp-session.service';
import { PermissionCheckerService } from './auth/permission-checker.service';
import { FeatureCheckerService } from './features/feature-checker.service';
import { LocalizationService } from './localization/localization.service';
import { SettingService } from './settings/setting.service';
import { NotifyService } from './notify/notify.service';
import { MessageService } from './message/message.service';
import { LogService } from './log/log.service';
import { AbpMultiTenancyService } from './multi-tenancy/abp-multi-tenancy.service';
import { AbpHttpConfiguration } from './abpHttpInterceptor';
import { AbpUserConfigurationService } from './abp-user-configuration.service';
import { TokenService } from './auth/token.service';
import { UtilsService } from './utils/utils.service';
var AbpModule = /** @class */ (function () {
    function AbpModule() {
    }
    AbpModule = __decorate([
        NgModule({
            declarations: [],
            providers: [
                AbpSessionService,
                PermissionCheckerService,
                FeatureCheckerService,
                LocalizationService,
                SettingService,
                NotifyService,
                MessageService,
                LogService,
                AbpMultiTenancyService,
                AbpUserConfigurationService,
                AbpHttpConfiguration,
                TokenService,
                UtilsService
            ]
        })
    ], AbpModule);
    return AbpModule;
}());
export { AbpModule };
//# sourceMappingURL=abp.module.js.map