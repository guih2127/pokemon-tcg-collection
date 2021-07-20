using Microsoft.EntityFrameworkCore;
using pokemonTcgCollectionApi.Models;

namespace pokemonTcgCollectionApi.Data
{
    public class ApiDbContext : DbContext
    {
        public virtual DbSet<RefreshToken> RefreshTokens { get; set; }
        public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options)
        {

        }

    }
}