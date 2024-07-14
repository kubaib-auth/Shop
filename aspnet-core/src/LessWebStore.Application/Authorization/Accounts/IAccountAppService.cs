using System.Threading.Tasks;
using Abp.Application.Services;
using LessWebStore.Authorization.Accounts.Dto;

namespace LessWebStore.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
