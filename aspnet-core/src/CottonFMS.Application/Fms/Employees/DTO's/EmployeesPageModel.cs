using System;
using System.Collections.Generic;
using System.Text;

namespace CottonFMS.Fms.Employees.DTO_s
{
   public class EmployeesPageModel
    {
        public List<EmployeesModel> EmployeesModel { get; set; }
        public int TotalCount { get; set; }
    }
}
