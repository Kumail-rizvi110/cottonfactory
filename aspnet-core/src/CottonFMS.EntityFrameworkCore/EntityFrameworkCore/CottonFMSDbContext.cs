using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using CottonFMS.Authorization.Roles;
using CottonFMS.Authorization.Users;
using CottonFMS.MultiTenancy;

namespace CottonFMS.EntityFrameworkCore
{
    public class CottonFMSDbContext : AbpZeroDbContext<Tenant, Role, User, CottonFMSDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public CottonFMSDbContext(DbContextOptions<CottonFMSDbContext> options)
            : base(options)
        {
        }
    }
}
