using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CottonFMS.Fms.CottonFiberInventory
{
   public class CottonFiberInventory : FullAuditedEntity<long>
    {
        //public long? CottonFiberPurchasedId { get; set; }

        //[ForeignKey("CottonFiberPurchasedId")]
        //[InverseProperty("Purchase")]
        public virtual CottonFiberPurchased.CottonFiberPurchased CottonFiberPurchased { get; set; }
    }
}
