using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace CottonFMS.Fms.Purchase.DTO_s
{
  public  class PurchaseModel : EntityDto<long>
    {
        public long? VendorsId { get; set; }
        public long? CottonFiberPurchasedId { get; set; }
        public int amount { get; set; }
        public DateTime PurchaseDate { get; set; }

    }
}
