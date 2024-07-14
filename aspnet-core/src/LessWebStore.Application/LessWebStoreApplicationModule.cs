using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using LessWebStore.Authorization;
using LessWebStore.Products.Dtos;

namespace LessWebStore
{
    [DependsOn(
        typeof(LessWebStoreCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class LessWebStoreApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<LessWebStoreAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(LessWebStoreApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
               
            cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}
