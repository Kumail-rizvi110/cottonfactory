using System;
using System.Collections.Generic;
using System.Text;

namespace CottonFMS.Fms.Attendance.DTO_s
{
   public class AttendancePageModel
    {
        public List<AttendanceModel> AttendanceModel { get; set; }
        public int TotalCount { get; set; }
    }
}
