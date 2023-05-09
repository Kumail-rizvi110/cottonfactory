using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CottonFMS.Fms.EmployeesWorkingInProduction
{
   public class EmployeesWorkingInProduction : FullAuditedEntity<long>
    {
        public string Field { get; set; }
        //public long? EmployeesId { get; set; }


        //[ForeignKey("EmployeesId")]
        //[InverseProperty("Purchase")]
            public virtual Employees.Employees Employees { get; set; }
        
    }
}
