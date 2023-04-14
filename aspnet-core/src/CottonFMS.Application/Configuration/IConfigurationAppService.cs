using System.Threading.Tasks;
using CottonFMS.Configuration.Dto;

namespace CottonFMS.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
