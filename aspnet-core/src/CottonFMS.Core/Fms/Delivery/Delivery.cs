using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CottonFMS.Fms.Delivery
{
   public class Delivery : FullAuditedEntity<long>
    {
        public string Address { get; set; }
         public DateTime DeliveryDate { get; set; }
        public long? OrderId { get; set; }
        public long? CustomersId { get; set; }
        //public long? OrdersId { get; set; }
        //public long? CustomerId { get; set; }


        //[ForeignKey("OrdersId")]
        //[InverseProperty("Purchase")]
        public virtual Orders.Orders Orders { get; set; }

        //[ForeignKey("CustomerId")]
        //[InverseProperty("Purchase")]
        public virtual Customers.Customers Customers { get; set; }

    }
}
