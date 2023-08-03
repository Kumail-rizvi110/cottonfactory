using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CottonFMS.Fms.ProductionPlan
{
   public class ProductionPlan : FullAuditedEntity<long>
    {
        //public int NoOfEmployees { get; set; }
        //public int NoOfAssets { get; set; }
        public DateTime ProductionDate { get; set; }

        public long? EmployeesTeamId { get; set; }
        public int TimeTaken { get; set; }
        public string Quality { get; set; }
        public int CottonProduced { get; set; }
        public int CottonFiberUsed { get; set; }





        //public long? CottonFiberUsedInProductionId { get; set; }



        //[ForeignKey("CottonFiberUsedInProductionId")]
        //[InverseProperty("Purchase")]
        public virtual EmployeesTeam.EmployeesTeam EmployeesTeam { get; set; }

        //public virtual CottonFiberUsedinProduction.CottonFiberUsedinProduction CottonFiberUsedinProduction { get; set; }
    }
}
