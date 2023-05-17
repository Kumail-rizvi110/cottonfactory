using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations.Schema;

namespace CottonFMS.Fms.Payments
{
    public class Payments : FullAuditedEntity<long>
    {
        public int Amount { get; set; }
        public DateTime PaymentDate { get; set; }

        public long? OrdersId { get; set; }
        public long? CustomersId { get; set; }


        //[ForeignKey("CustomersId")]
        //[InverseProperty("Purchase")]
        public virtual Customers.Customers Customers { get; set; }

        //[ForeignKey("OrdersId")]
        //[InverseProperty("Purchase")]
        public virtual Orders.Orders Orders { get; set; }

    }
}
