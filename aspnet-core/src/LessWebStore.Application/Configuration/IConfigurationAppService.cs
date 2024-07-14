using System.Threading.Tasks;
using LessWebStore.Configuration.Dto;

namespace LessWebStore.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
