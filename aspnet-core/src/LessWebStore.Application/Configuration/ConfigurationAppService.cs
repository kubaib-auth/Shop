using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using LessWebStore.Configuration.Dto;

namespace LessWebStore.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : LessWebStoreAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
