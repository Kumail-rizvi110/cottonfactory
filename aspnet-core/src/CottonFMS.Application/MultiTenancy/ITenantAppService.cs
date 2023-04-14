using Abp.Application.Services;
using Abp.Application.Services.Dto;
using CottonFMS.MultiTenancy.Dto;

namespace CottonFMS.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

