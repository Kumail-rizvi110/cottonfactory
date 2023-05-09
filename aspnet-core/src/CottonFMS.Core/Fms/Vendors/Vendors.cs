﻿using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Text;

namespace CottonFMS.Fms.Vendors
{
   public class Vendors : FullAuditedEntity<long>
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }
        public int Phone{ get; set; }
        public string email{ get; set; }
        public string Address{ get; set; }
    }
}
