using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CottonFMS.Fms.Attendance
{
  public  class Attendance : FullAuditedEntity<long>
    {
        public string AttendanceMark { get; set; }
        public DateTime Date { get; set; }
        public long? EmployeesId { get; set; }


        //public long? EmployeesId { get; set; }
        //[ForeignKey("EmployeesId")]
        //[InverseProperty("Purchase")]
        public virtual Employees.Employees Employees { get; set; }

    }
}
