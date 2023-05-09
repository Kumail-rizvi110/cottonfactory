using Abp.Domain.Entities.Auditing;
using CottonFMS.Fms;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CottonFMS.Fms.AssetsMaintenance
{
  public  class AssetsMaintenance: FullAuditedEntity<long>
    {
        public decimal Cost { get; set; }
        public DateTime MaintenanceDate { get; set; }
        //public long? AssetsId { get; set; }


        //[ForeignKey("AssetsId")]
        //[InverseProperty("Purchase")]
        public virtual Assets.Assets Assets { get; set; }



    }
}
