using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace CottonFMS.Fms.Orders.DTO_s
{
   public class OrdersModel: EntityDto<long>
    {
        public int CottonQuantity { get; set; }
        public string CottonQuality { get; set; }
        public DateTime OrderDate { get; set; }
        //public long? CottonProducedId { get; set; }

        public long? CustomersId { get; set; }
        public string CustomersName { get; set; }
        public long? CottonInventoryId { get; set; }

        public bool IsDelivered { get; set; }


    }
}
