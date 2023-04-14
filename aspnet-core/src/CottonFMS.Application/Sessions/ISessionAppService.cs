using System.Threading.Tasks;
using Abp.Application.Services;
using CottonFMS.Sessions.Dto;

namespace CottonFMS.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
