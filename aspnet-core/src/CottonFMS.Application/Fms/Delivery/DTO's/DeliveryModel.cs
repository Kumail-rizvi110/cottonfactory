using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace CottonFMS.Fms.Delivery.DTO_s
{
   public class DeliveryModel : EntityDto<long>
    {
        public long? OrdersId { get; set; }
        public long? CustomersId { get; set; }

        public string Address { get; set; }
        public DateTime DeliveryDate { get; set; }
    }
}
