using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CottonFMS.Fms.CottonFiberPurchased
{
  public  class CottonFiberPurchased : FullAuditedEntity<long>
    {
        public int Quantity { get; set; }
        public string Quality { get; set; }
        //public long? PurchasedId { get; set; }

        //[ForeignKey("PurchasedId")]
        //[InverseProperty("Purchase")]
        public virtual Purchase.Purchase Purchase { get; set; }
    }
}
