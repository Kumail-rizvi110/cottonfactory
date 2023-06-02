using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using CottonFMS.Authorization;
using CottonFMS.Fms;
using CottonFMS.Fms.Assets;
using CottonFMS.Fms.Assets.DTO_s;
using CottonFMS.Fms.Attendance;
using CottonFMS.Fms.Attendance.DTO_s;
using CottonFMS.Fms.Customers;
using CottonFMS.Fms.Customers.DTO_s;
using CottonFMS.Fms.Delivery;
using CottonFMS.Fms.Delivery.DTO_s;
using CottonFMS.Fms.Employees;
using CottonFMS.Fms.Employees.DTO_s;
using CottonFMS.Fms.Orders;
using CottonFMS.Fms.Orders.DTO_s;
using CottonFMS.Fms.Payments;
using CottonFMS.Fms.Payments.DTO_s;
using CottonFMS.Fms.Purchase;
using CottonFMS.Fms.Purchase.DTO_s;
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


                config.CreateMap<OrdersModel, Orders>()
           .ForMember(des => des.Customers.FirstName +' '+ des.Customers.FirstName, opt => opt.MapFrom(src => src.CustomersName))
           .ForMember(des => des.CottonInventoryId, opt => opt.MapFrom(src => src.CottonInventoryId))
           .ForMember(des => des.CottonQuality, opt => opt.MapFrom(src => src.CottonQuality))
           .ForMember(des => des.CustomersId, opt => opt.MapFrom(src => src.CustomersId))
           ;

                config.CreateMap<Orders, OrdersModel>().ReverseMap();

                config.CreateMap<PaymentsModel, Payments>()
            .ForMember(des => des.Amount, opt => opt.MapFrom(src => src.Amount))
            .ForMember(des => des.PaymentDate, opt => opt.MapFrom(src => src.PaymentDate));
            //.ForMember(des => des.Phone, opt => opt.MapFrom(src => src.Phone))
            //.ForMember(des => des.email, opt => opt.MapFrom(src => src.email))
            //.ForMember(des => des.Address, opt => opt.MapFrom(src => src.Address));

                config.CreateMap<Payments, PaymentsModel>().ReverseMap();

                config.CreateMap<AttendanceModel, Attendance>()
              .ForMember(des => des.AttendanceMark, opt => opt.MapFrom(src => src.AttendanceMark))
              .ForMember(des => des.Date, opt => opt.MapFrom(src => src.Date));
              //.ForMember(des => des.Phone, opt => opt.MapFrom(src => src.Phone))
              //.ForMember(des => des.email, opt => opt.MapFrom(src => src.email))
              //.ForMember(des => des.Address, opt => opt.MapFrom(src => src.Address));

                config.CreateMap<Attendance, AttendanceModel>().ReverseMap();

                config.CreateMap<PurchaseModel, Purchase>()
             .ForMember(des => des.amount, opt => opt.MapFrom(src => src.amount))
             .ForMember(des => des.PurchaseDate, opt => opt.MapFrom(src => src.PurchaseDate));
                //.ForMember(des => des.Phone, opt => opt.MapFrom(src => src.Phone))
                //.ForMember(des => des.email, opt => opt.MapFrom(src => src.email))
                //.ForMember(des => des.Address, opt => opt.MapFrom(src => src.Address));

                config.CreateMap<Purchase, PurchaseModel>().ReverseMap();

                config.CreateMap<DeliveryModel, Delivery>()
              .ForMember(des => des.DeliveryDate, opt => opt.MapFrom(src => src.DeliveryDate))
              .ForMember(des => des.Address, opt => opt.MapFrom(src => src.Address));
                //.ForMember(des => des.Phone, opt => opt.MapFrom(src => src.Phone))
                //.ForMember(des => des.email, opt => opt.MapFrom(src => src.email))
                //.ForMember(des => des.Address, opt => opt.MapFrom(src => src.Address));

                config.CreateMap<Delivery, DeliveryModel>().ReverseMap();

                config.CreateMap<EmployeesModel, Employees>()
             .ForMember(des => des.FirstName, opt => opt.MapFrom(src => src.FirstName))
             .ForMember(des => des.LastName, opt => opt.MapFrom(src => src.LastName))
             .ForMember(des => des.Phone, opt => opt.MapFrom(src => src.Phone))
             .ForMember(des => des.email, opt => opt.MapFrom(src => src.email))
             .ForMember(des => des.Address, opt => opt.MapFrom(src => src.Address))
             .ForMember(des => des.Pay, opt => opt.MapFrom(src => src.Pay))
             .ForMember(des => des.Rank, opt => opt.MapFrom(src => src.Rank))
            .ForMember(des => des.DateOfJoinning, opt => opt.MapFrom(src => src.DateOfJoinning));


                config.CreateMap<Employees, EmployeesModel>().ReverseMap();

                config.CreateMap<AssetsModel, Assets>()
.ForMember(des => des.Cost, opt => opt.MapFrom(src => src.Cost))
.ForMember(des => des.DateOfBuying,opt => opt.MapFrom(src => src.DateOfBuying))
.ForMember(des => des.FirstName, opt => opt.MapFrom(src => src.FirstName));
//.ForMember(des => des.email, opt => opt.MapFrom(src => src.email))
//.ForMember(des => des.Address, opt => opt.MapFrom(src => src.Address));

                config.CreateMap<Assets, AssetsModel>().ReverseMap();

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
