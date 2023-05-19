using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CottonFMS.Fms.Orders
{
   public class Orders : FullAuditedEntity<long>
    {
        public int CottonQuantity { get; set; }
        public string CottonQuality { get; set; }
        public DateTime OrderDate { get; set; }
        public long? CustomersId { get; set; }
        public long? CottonInventoryId { get; set; }
        public bool IsDelivered { get; set; }


        //public long? CustomersId { get; set; }
        //public long? CottonInventoryId { get; set; }


        //[ForeignKey("CustomersId")]
        //[InverseProperty("Purchase")]
        public virtual Customers.Customers Customers { get; set; }

        //[ForeignKey("CottonInventoryId")]
        //[InverseProperty("Purchase")]
        public virtual CottonInventory.CottonInventory CottonInventory { get; set; }
    }
}
