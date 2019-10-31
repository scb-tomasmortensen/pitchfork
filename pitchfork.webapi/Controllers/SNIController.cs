using System.Linq;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using pitchfork.webapi.Models;
using pitchfork.webapi.Services;
using Serilog;

namespace pitchfork.webapi.Controllers
{
    [Route("api/sni")]
    [ApiController]
    [EnableCors("AllowLocalAccess")]
    public class SNIController : ControllerBase
    {
        private readonly ISNIService _service;
        private readonly ILogger _logger;
        public SNIController(ISNIService service, ILogger logger)
        {
            _service = service;
            _logger = logger;
        }

        [HttpGet]
        [Route("departments")]
        public Department[] Get()
        {
            return _service.GetDepartments().ToArray();
        }
    }
}