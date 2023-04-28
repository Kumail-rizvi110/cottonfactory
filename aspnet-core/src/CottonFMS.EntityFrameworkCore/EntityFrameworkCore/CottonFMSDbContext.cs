using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using CottonFMS.Authorization.Roles;
using CottonFMS.Authorization.Users;
using CottonFMS.MultiTenancy;
using CottonFMS.Fms.Sales;

namespace CottonFMS.EntityFrameworkCore
{
    public class CottonFMSDbContext : AbpZeroDbContext<Tenant, Role, User, CottonFMSDbContext>
    {
        /* Define a DbSet for each entity of the application */
        public DbSet<Sales> Sales { get; set; }


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
