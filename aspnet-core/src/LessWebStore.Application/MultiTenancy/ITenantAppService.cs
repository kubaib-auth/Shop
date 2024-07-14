using Abp.Application.Services;
using LessWebStore.MultiTenancy.Dto;

namespace LessWebStore.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

