using Abp.Domain.Entities.Auditing;
using CottonFMS.Fms;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CottonFMS.Fms.CottonFiberUsedinProduction
{
  public class CottonFiberUsedinProduction : FullAuditedEntity<long>
    {
        public int  Quantity { get; set; }
        public string Quality { get; set; }
        //public long? CottonFiberInventoryId { get; set; }
        //public long? ProductionPlanId { get; set; }


        //[ForeignKey("CottonFiberInventoryId")]
        //[InverseProperty("Purchase")]
        public virtual CottonFiberInventory.CottonFiberInventory CottonFiberInventory { get; set; }

        //[ForeignKey("ProductionPlanId")]
        //[InverseProperty("Purchase")]
        public virtual ProductionPlan.ProductionPlan ProductionPlan { get; set; }
    }
}
