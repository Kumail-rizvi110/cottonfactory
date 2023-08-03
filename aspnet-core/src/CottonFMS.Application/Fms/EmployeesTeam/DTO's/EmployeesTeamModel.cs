using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace CottonFMS.Fms.EmployeesTeam.DTO_s
{
  public  class EmployeesTeamModel : EntityDto<long>
    {
        public int NumbersOfTeamMembers { get; set; }
        public string Name { get; set; }
        public long? EmployeesTeamMembersId { get; set; }
        public long? ShiftsId { get; set; }
    }
}
