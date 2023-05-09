using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CottonFMS.Fms.CottonProduced
{
   public class CottonProduced : FullAuditedEntity<long>
    {
        public int Quantity { get; set; }
        public string Quality { get; set; }
        //public long? ProductionPlanId { get; set; }


        //[ForeignKey("ProductionPlanId")]
        //[InverseProperty("Purchase")]
        public virtual ProductionPlan.ProductionPlan ProductionPlan { get; set; }
    }
}
