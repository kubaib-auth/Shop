using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace LessWebStore.EntityFrameworkCore
{
    public static class LessWebStoreDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<LessWebStoreDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<LessWebStoreDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
