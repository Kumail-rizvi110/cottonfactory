using System;
using System.Collections.Generic;
using System.Text;

namespace CottonFMS.Fms.Vendors.DTO_s
{
   public class VendorsPageModel
    {
        public List<VendorsModel> VendorsModel { get; set; }
        public int TotalCount { get; set; }
    }
}
