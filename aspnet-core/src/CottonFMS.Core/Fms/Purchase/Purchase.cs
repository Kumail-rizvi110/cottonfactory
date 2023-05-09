using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CottonFMS.Fms.Purchase
{
    public class Purchase : FullAuditedEntity<long>
    {
        //public long? VendorsId { get; set; }
        //public long? CottonFiberPurchasedId { get; set; }
        //public long? cottonfiber_id { get; set; }
        public long? VendorsId { get; set; }
        public long? CottonFiberPurchasedId { get; set; }
        public int amount { get; set; }
        public DateTime PurchaseDate { get; set; }

        //[ForeignKey("VendorsId")]
        //[InverseProperty("Purchase")]
        public virtual Vendors.Vendors Vendors { get; set; }

        //[ForeignKey("CottonFiberPurchasedId")]
        //[InverseProperty("Purchase")]
        public virtual CottonFiberPurchased.CottonFiberPurchased CottonFiberPurchased { get; set; }
    }
}
