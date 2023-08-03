using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Text;

namespace CottonFMS.Fms.EmployeesTeam
{
  public  class EmployeesTeam : FullAuditedEntity<long>
    {
        public int NumbersOfTeamMembers { get; set; }
        public string Name { get; set; }
        public long?  EmployeesTeamMembersId { get; set; }
        public long? ShiftsId { get; set; }


        public virtual EmployeesTeamMembers.EmployeesTeamMembers EmployeesTeamMembers { get; set; }
        public virtual Shifts.Shifts Shifts { get; set; }


    }
}
