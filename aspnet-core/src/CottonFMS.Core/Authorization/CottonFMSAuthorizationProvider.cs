using Abp.Authorization;
using Abp.Localization;
using Abp.MultiTenancy;

namespace CottonFMS.Authorization
{
    public class CottonFMSAuthorizationProvider : AuthorizationProvider
    {
        public override void SetPermissions(IPermissionDefinitionContext context)
        {
            context.CreatePermission(PermissionNames.Pages_Users, L("Users"));
            context.CreatePermission(PermissionNames.Pages_Roles, L("Roles"));
            context.CreatePermission(PermissionNames.Pages_Sales, L("Sales"));
            context.CreatePermission(PermissionNames.Pages_Customers, L("Customers"));
            context.CreatePermission(PermissionNames.Pages_Purchasing, L("Purchasing"));
            context.CreatePermission(PermissionNames.Pages_Employees, L("Employees"));
            context.CreatePermission(PermissionNames.Pages_Inventory, L("Inventory"));
            context.CreatePermission(PermissionNames.Pages_Vendors, L("Vendors"));
            context.CreatePermission(PermissionNames.Pages_Reports, L("Reports"));
            context.CreatePermission(PermissionNames.Pages_Production, L("Production"));
            context.CreatePermission(PermissionNames.Pages_Assets, L("Assets"));
            context.CreatePermission(PermissionNames.Pages_Attendance, L("Attendance"));

            context.CreatePermission(PermissionNames.Pages_Orders, L("Orders"));
            context.CreatePermission(PermissionNames.Pages_ImportantDocuments, L("ImportantDocuments"));
            context.CreatePermission(PermissionNames.Pages_LiveCottonPriceTracker, L("LiveCottonPriceTracker"));



            context.CreatePermission(PermissionNames.Pages_Tenants, L("Tenants"), multiTenancySides: MultiTenancySides.Host);
        }

        private static ILocalizableString L(string name)
        {
            return new LocalizableString(name, CottonFMSConsts.LocalizationSourceName);
        }
    }
}
