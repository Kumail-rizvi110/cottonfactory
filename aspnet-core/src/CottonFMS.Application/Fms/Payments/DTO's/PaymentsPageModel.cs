using System;
using System.Collections.Generic;
using System.Text;

namespace CottonFMS.Fms.Payments.DTO_s
{
  public  class PaymentsPageModel
    {
        public List<PaymentsModel> PaymentsModel { get; set; }
        public int TotalCount { get; set; }
    }
}
