using Abp.Domain.Entities.Auditing;
using Castle.MicroKernel.SubSystems.Conversion;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Abp.Application.Services.Dto;

namespace CottonFMS.Fms.Sales
{
    public class Sales : FullAuditedEntity<long>
    {
      
        public DateTime Date { get; set; }

        [Column(TypeName = "decimal(12,2)")]
        public decimal? NetCharge { get; set; }

        public long? product_id { get; set; }


        public long? customer_id { get; set; }

        public int? quantity { get; set; }


        [Column(TypeName = "decimal(12,2)")]
        public decimal price { get; set; }

    }
}
