using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CottonFMS.Fms.ProductionPlan
{
   public class ProductionPlan : FullAuditedEntity<long>
    {
        public int NoOfEmployees { get; set; }
        public int NoOfAssets { get; set; }
        public DateTime ProductionDate { get; set; }

        //public long? CottonFiberUsedInProductionId { get; set; }



        [ForeignKey("CottonFiberUsedInProductionId")]
        //[InverseProperty("Purchase")]
        public virtual CottonFiberUsedinProduction.CottonFiberUsedinProduction CottonFiberUsedinProduction { get; set; }
    }
}
