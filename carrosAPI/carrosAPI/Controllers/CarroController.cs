using carrosAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace carrosAPI.Controllers
{
    [Route("api/[controller]")]
    public class CarroController : Controller
    {
        //Variable de contexto de BD
        private readonly BdCarroContext _baseDatos;

        public CarroController(BdCarroContext baseDatos)
        {
            this._baseDatos = baseDatos;
        }

        //Método GET Para Obtener la Lista de Carros
        [HttpGet]
        [Route("ListaCarros")]
        public async Task<IActionResult> Lista()
        {
            var listaCarros = await _baseDatos.Carros.ToListAsync();
            return Ok(listaCarros);

        }
    }
}
