using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace CottonFMS.Fms.Employees.DTO_s
{
  public  class EmployeesModel : EntityDto<long>
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }
        public int Phone { get; set; }
        public string email { get; set; }
        public string Address { get; set; }
        public string Pay { get; set; }
        public string Rank { get; set; }
        public DateTime DateOfJoinning { get; set; }
    }
}
