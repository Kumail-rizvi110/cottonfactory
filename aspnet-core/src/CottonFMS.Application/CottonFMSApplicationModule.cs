using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using CottonFMS.Authorization;

namespace CottonFMS
{
    [DependsOn(
        typeof(CottonFMSCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class CottonFMSApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<CottonFMSAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(CottonFMSApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}
