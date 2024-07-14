using Abp.Authorization;
using LessWebStore.Authorization.Roles;
using LessWebStore.Authorization.Users;

namespace LessWebStore.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
