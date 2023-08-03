using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace CottonFMS.Fms.Attendance.DTO_s
{
  public  class AttendanceModel : EntityDto<long>
    {
        public bool AttendanceMark { get; set; }
        public DateTime Date { get; set; }
        public long? EmployeesId { get; set; }
        public bool isChecked { get; set; }

        //public long? OrderId { get; set; }


    }
}
