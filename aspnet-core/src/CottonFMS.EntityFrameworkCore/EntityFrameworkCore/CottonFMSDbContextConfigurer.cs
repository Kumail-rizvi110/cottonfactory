using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace CottonFMS.EntityFrameworkCore
{
    public static class CottonFMSDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<CottonFMSDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<CottonFMSDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
