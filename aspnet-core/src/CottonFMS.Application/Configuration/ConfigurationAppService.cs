using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using CottonFMS.Configuration.Dto;

namespace CottonFMS.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : CottonFMSAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
