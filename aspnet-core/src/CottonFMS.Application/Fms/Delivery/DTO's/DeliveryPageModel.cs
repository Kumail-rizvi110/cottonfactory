using System;
using System.Collections.Generic;
using System.Text;

namespace CottonFMS.Fms.Delivery.DTO_s
{
  public  class DeliveryPageModel
    {
        public List<DeliveryModel> DeliveryModel { get; set; }
        public int TotalCount { get; set; }
    }
}
