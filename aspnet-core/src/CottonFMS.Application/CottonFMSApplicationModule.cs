using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using CottonFMS.Authorization;
using CottonFMS.Fms;
using CottonFMS.Fms.Customers;
using CottonFMS.Fms.Customers.DTO_s;
using CottonFMS.Fms.Sales;
using CottonFMS.Fms.Sales.DTO_s;
using CottonFMS.Fms.Vendors;
using CottonFMS.Fms.Vendors.DTO_s;

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


                config.CreateMap<VendorsModel, Vendors>()
              .ForMember(des => des.FirstName, opt => opt.MapFrom(src => src.FirstName))
              .ForMember(des => des.LastName, opt => opt.MapFrom(src => src.LastName))
              .ForMember(des => des.Phone, opt => opt.MapFrom(src => src.Phone))
              .ForMember(des => des.email, opt => opt.MapFrom(src => src.email))
              .ForMember(des => des.Address, opt => opt.MapFrom(src => src.Address));

                config.CreateMap<Vendors, VendorsModel>().ReverseMap();

                config.CreateMap<CustomersModel, Customers>()
             .ForMember(des => des.FirstName, opt => opt.MapFrom(src => src.FirstName))
             .ForMember(des => des.LastName, opt => opt.MapFrom(src => src.LastName))
             .ForMember(des => des.Phone, opt => opt.MapFrom(src => src.Phone))
             .ForMember(des => des.email, opt => opt.MapFrom(src => src.email))
             .ForMember(des => des.Address, opt => opt.MapFrom(src => src.Address));

                config.CreateMap<Customers, CustomersModel>().ReverseMap();

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
