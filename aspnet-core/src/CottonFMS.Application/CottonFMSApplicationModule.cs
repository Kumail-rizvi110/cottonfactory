using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using CottonFMS.Authorization;
using CottonFMS.Fms.Sales;
using CottonFMS.Fms.Sales.DTO_s;

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
            Configuration.Modules.AbpAutoMapper().Configurators.Add(config =>
            {

                config.CreateMap<SalesModel, Sales>()
              .ForMember(des => des.customer_id, opt => opt.MapFrom(src => src.customer_id))
              .ForMember(des => des.NetCharge, opt => opt.MapFrom(src => src.NetCharge))
              .ForMember(des => des.price, opt => opt.MapFrom(src => src.price))
              .ForMember(des => des.product_id, opt => opt.MapFrom(src => src.product_id))
              .ForMember(des => des.quantity, opt => opt.MapFrom(src => src.quantity));

                config.CreateMap<Sales, SalesModel>().ReverseMap();

            });
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
