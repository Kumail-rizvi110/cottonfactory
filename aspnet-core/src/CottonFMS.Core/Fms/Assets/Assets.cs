using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Text;

namespace CottonFMS.Fms.Assets
{
   public class Assets: FullAuditedEntity<long>
    {
        public string FirstName { get; set; }
        public decimal Cost { get; set; }
        public DateTime DateOfBuying { get; set; }

    }
}
