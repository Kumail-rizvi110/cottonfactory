using System;
using System.Collections.Generic;
using System.Text;

namespace CottonFMS.Fms.Sales.DTO_s
{
    public class SalesPageModel
    {
        public List<SalesModel> SalesModel { get; set; }
        public int TotalCount { get; set; }
    }
}
