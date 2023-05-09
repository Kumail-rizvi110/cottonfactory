using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CottonFMS.Fms.AssetsworkinginProduction
{
   public class AssetsWorkingInProduction : FullAuditedEntity<long>
    {
        //public long? AssetsId { get; set; }

        //[ForeignKey("AssetsId")]
        //[InverseProperty("Purchase")]
        public virtual Assets.Assets Assets { get; set; }
    }
}
