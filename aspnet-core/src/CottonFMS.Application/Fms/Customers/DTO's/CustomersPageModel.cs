using System;
using System.Collections.Generic;
using System.Text;

namespace CottonFMS.Fms.Customers.DTO_s
{
   public class CustomersPageModel
    {
        public List<CustomersModel> CustomersModel { get; set; }
        public int TotalCount { get; set; }
    }
}
