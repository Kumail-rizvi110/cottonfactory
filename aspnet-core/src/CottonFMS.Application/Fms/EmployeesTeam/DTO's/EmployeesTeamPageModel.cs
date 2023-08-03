using System;
using System.Collections.Generic;
using System.Text;

namespace CottonFMS.Fms.EmployeesTeam.DTO_s
{
  public  class EmployeesTeamPageModel
    {
        public List<EmployeesTeamModel> EmployeesTeamModel { get; set; }
        public int TotalCount { get; set; }
    }
}
