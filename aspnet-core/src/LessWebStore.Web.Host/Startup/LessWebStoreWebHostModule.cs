using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using LessWebStore.Configuration;

namespace LessWebStore.Web.Host.Startup
{
    [DependsOn(
       typeof(LessWebStoreWebCoreModule))]
    public class LessWebStoreWebHostModule: AbpModule
    {
        private readonly IWebHostEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public LessWebStoreWebHostModule(IWebHostEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(LessWebStoreWebHostModule).GetAssembly());
        }
    }
}
