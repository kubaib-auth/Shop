using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using LessWebStore.EntityFrameworkCore;
using LessWebStore.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace LessWebStore.Web.Tests
{
    [DependsOn(
        typeof(LessWebStoreWebMvcModule),
        typeof(AbpAspNetCoreTestBaseModule)
    )]
    public class LessWebStoreWebTestModule : AbpModule
    {
        public LessWebStoreWebTestModule(LessWebStoreEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
        } 
        
        public override void PreInitialize()
        {
            Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(LessWebStoreWebTestModule).GetAssembly());
        }
        
        public override void PostInitialize()
        {
            IocManager.Resolve<ApplicationPartManager>()
                .AddApplicationPartsIfNotAddedBefore(typeof(LessWebStoreWebMvcModule).Assembly);
        }
    }
}