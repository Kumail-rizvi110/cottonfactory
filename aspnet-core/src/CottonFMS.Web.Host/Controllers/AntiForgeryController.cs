using Microsoft.AspNetCore.Antiforgery;
using CottonFMS.Controllers;

namespace CottonFMS.Web.Host.Controllers
{
    public class AntiForgeryController : CottonFMSControllerBase
    {
        private readonly IAntiforgery _antiforgery;

        public AntiForgeryController(IAntiforgery antiforgery)
        {
            _antiforgery = antiforgery;
        }

        public void GetToken()
        {
            _antiforgery.SetCookieTokenAndHeader(HttpContext);
        }
    }
}
