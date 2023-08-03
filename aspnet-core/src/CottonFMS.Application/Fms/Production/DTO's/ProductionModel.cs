using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace CottonFMS.Fms.Production.DTO_s
{
   public class ProductionModel : EntityDto<long>
    {
        public DateTime ProductionDate { get; set; }

        public long? EmployeesTeamId { get; set; }
        public int TimeTaken { get; set; }
        public string Quality { get; set; }
        public int CottonProduced { get; set; }
        public int CottonFiberUsed { get; set; }
    }
}
