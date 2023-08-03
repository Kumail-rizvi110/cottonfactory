using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using CottonFMS.Authorization.Roles;
using CottonFMS.Authorization.Users;
using CottonFMS.MultiTenancy;
//using CottonFMS.Fms.Sales;
using CottonFMS.Fms.Vendors;
using CottonFMS.Fms;
//using CottonFMS.Fms;
using CottonFMS.Fms.Customers;
using CottonFMS.Fms.Payments;
using CottonFMS.Fms.Purchase;
using CottonFMS.Fms.ProductionPlan;
using CottonFMS.Fms.Orders;
using CottonFMS.Fms.Sales;
using CottonFMS.Fms.EmployeesWorkingInProduction;
using CottonFMS.Fms.Employees;
using CottonFMS.Fms.Delivery;
using CottonFMS.Fms.CottonProduced;
using CottonFMS.Fms.CottonInventory;
using CottonFMS.Fms.AssetsMaintenance;
using CottonFMS.Fms.CottonFiberPurchased;
using CottonFMS.Fms.Attendance;
using CottonFMS.Fms.AssetsworkinginProduction;
using CottonFMS.Fms.Assets;
using CottonFMS.Fms.CottonFiberInventory;
using CottonFMS.Fms.CottonFiberUsedinProduction;
using CottonFMS.Fms.EmployeesTeamMembers;
using CottonFMS.Fms.Shifts;
using CottonFMS.Fms.EmployeesTeam;
using CottonFMS.Fms.ImportantDocuments;

namespace CottonFMS.EntityFrameworkCore
{
    public class CottonFMSDbContext : AbpZeroDbContext<Tenant, Role, User, CottonFMSDbContext>
    {
        /* Define a DbSet for each entity of the application */
        public DbSet<Sales> Sales { get; set; }
        public DbSet<Vendors> Vendors { get; set; }

        public DbSet<Customers> Customers { get; set; }
        public DbSet<Payments> Payments { get; set; }

        public DbSet<Assets> Assets { get; set; }
        public DbSet<AssetsMaintenance> AssetsMaintenance { get; set; }
        public DbSet<AssetsWorkingInProduction> AssetsWorkingInProductionPayments { get; set; }
        public DbSet<Attendance> Attendance { get; set; }
        public DbSet<CottonFiberInventory> CottonFiberInventory { get; set; }
        public DbSet<CottonFiberPurchased> CottonFiberPurchased { get; set; }
        public DbSet<CottonFiberUsedinProduction> CottonFiberUsedinProduction { get; set; }

        public DbSet<CottonInventory> CottonInventory { get; set; }
        public DbSet<CottonProduced> CottonProduced { get; set; }

        public DbSet<Delivery> Delivery { get; set; }

        public DbSet<Employees> Employees { get; set; }
        public DbSet<EmployeesWorkingInProduction> EmployeesWorkingInProduction { get; set; }

        public DbSet<Orders> Orders { get; set; }
        public DbSet<ProductionPlan> ProductionPlan { get; set; }
        public DbSet<Purchase> Purchase { get; set; }
        public DbSet<EmployeesTeam> EmployeesTeam { get; set; }
        
        public DbSet<EmployeesTeamMembers> EmployeesTeamMembers { get; set; }
        public DbSet<Shifts> Shifts { get; set; }
        public DbSet<ImportantDocuments> ImportantDocuments { get; set; }

        







        public CottonFMSDbContext(DbContextOptions<CottonFMSDbContext> options)
            : base(options)
        {
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Sales>();
                //.HasOne(b => b.customer_id)
                //.WithMany(u => u.BillReceipt)
               // .OnDelete(DeleteBehavior.NoAction);

          




        }
    }
}
