using System;
using System.Collections.Generic;
using System.Text;

namespace CottonFMS.Fms.Purchase.DTO_s
{
   public class PurchasePageModel
    {
        public List<PurchaseModel> PurchaseModel { get; set; }
        public int TotalCount { get; set; }
    }
}
