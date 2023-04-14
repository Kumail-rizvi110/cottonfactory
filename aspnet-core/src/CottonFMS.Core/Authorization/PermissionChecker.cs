using Abp.Authorization;
using CottonFMS.Authorization.Roles;
using CottonFMS.Authorization.Users;

namespace CottonFMS.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
