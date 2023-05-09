using System;
using System.Collections.Generic;
using System.Text;

namespace CottonFMS.Fms.Orders.DTO_s
{
   public class OrdersPageModel
    {
        public List<OrdersModel> OrdersModel { get; set; }
        public int TotalCount { get; set; }
    }
}
