using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using CottonFMS.Configuration;
using CottonFMS.Web;

namespace CottonFMS.EntityFrameworkCore
{
    /* This class is needed to run "dotnet ef ..." commands from command line on development. Not used anywhere else */
    public class CottonFMSDbContextFactory : IDesignTimeDbContextFactory<CottonFMSDbContext>
    {
        public CottonFMSDbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<CottonFMSDbContext>();
            var configuration = AppConfigurations.Get(WebContentDirectoryFinder.CalculateContentRootFolder());

            CottonFMSDbContextConfigurer.Configure(builder, configuration.GetConnectionString(CottonFMSConsts.ConnectionStringName));

            return new CottonFMSDbContext(builder.Options);
        }
    }
}
