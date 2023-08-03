using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Text;

namespace CottonFMS.Fms.Shifts
{
   public class Shifts : FullAuditedEntity<long>
    {
        public string Name { get; set; }
        
    }
}
