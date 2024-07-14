using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace LessWebStore.Controllers
{
    public abstract class LessWebStoreControllerBase: AbpController
    {
        protected LessWebStoreControllerBase()
        {
            LocalizationSourceName = LessWebStoreConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
