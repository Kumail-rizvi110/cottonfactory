using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using CottonFMS.Roles.Dto;
using CottonFMS.Users.Dto;

namespace CottonFMS.Users
{
    public interface IUserAppService : IAsyncCrudAppService<UserDto, long, PagedUserResultRequestDto, CreateUserDto, UserDto>
    {
        Task<ListResultDto<RoleDto>> GetRoles();

        Task ChangeLanguage(ChangeUserLanguageDto input);
    }
}
