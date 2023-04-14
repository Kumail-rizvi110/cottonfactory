using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using CottonFMS.Configuration;

namespace CottonFMS.Web.Host.Startup
{
    [DependsOn(
       typeof(CottonFMSWebCoreModule))]
    public class CottonFMSWebHostModule: AbpModule
    {
        private readonly IHostingEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public CottonFMSWebHostModule(IHostingEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(CottonFMSWebHostModule).GetAssembly());
        }
    }
}
