namespace carrosAPI.Models
{
    public class Carro
    {
        public int IdCarro { get; set; }

        public string Nombre { get; set; }

        public string? Modelo { get; set; }

        public decimal Precio { get; set; }

        public byte[] Imagen { get; set; }
    }
}
