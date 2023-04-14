using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace CottonFMS.Controllers
{
    public abstract class CottonFMSControllerBase: AbpController
    {
        protected CottonFMSControllerBase()
        {
            LocalizationSourceName = CottonFMSConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
