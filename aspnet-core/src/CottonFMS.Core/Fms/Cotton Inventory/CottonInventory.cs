using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CottonFMS.Fms.CottonInventory
{ 
   public class CottonInventory : FullAuditedEntity<long>
    {

        //public long? CottonProducedId { get; set; }


        //[ForeignKey("CottonProducedId")]
        //[InverseProperty("Purchase")]
        public virtual CottonProduced.CottonProduced CottonProduced { get; set; }
    }
}
