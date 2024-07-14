using System.Threading.Tasks;
using Abp.Application.Services;
using LessWebStore.Sessions.Dto;

namespace LessWebStore.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
