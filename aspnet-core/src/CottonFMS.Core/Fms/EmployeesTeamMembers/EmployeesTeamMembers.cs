using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Text;

namespace CottonFMS.Fms.EmployeesTeamMembers
{
  public  class EmployeesTeamMembers : FullAuditedEntity<long>
    {
        public long? TeamId { get; set; }
        public long? EmployeeId { get; set; }


    }
}
