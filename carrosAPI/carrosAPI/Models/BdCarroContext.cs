using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace carrosAPI.Models
{
    public class BdCarroContext : DbContext
    {
        public BdCarroContext(DbContextOptions<BdCarroContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Carro> Carros { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                // Leer la cadena de conexión del archivo appsettings.json
                IConfigurationRoot configuration = new ConfigurationBuilder()
                    .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
                    .AddJsonFile("appsettings.json")
                    .Build();
                optionsBuilder.UseSqlServer(configuration.GetConnectionString("cadenaSQL"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Carro>(entity =>
            {
                entity.HasKey(e => e.IdCarro).HasName("PK__Carro__756A54024CD1EA36");

                entity.ToTable("Carro");

                entity.Property(e => e.IdCarro).HasColumnName("idCarro");
                entity.Property(e => e.Nombre)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nombre");
                entity.Property(e => e.Modelo)
                    .IsUnicode(false)
                    .HasColumnName("modelo");
                entity.Property(e => e.Precio)
                    .HasColumnName("precio");
                entity.Property(e => e.Imagen)
                    .HasColumnName("imagen");
            });
        }
    }
}
