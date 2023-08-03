using Abp.Application.Services.Dto;
using Abp.Domain.Entities.Auditing;
using Castle.MicroKernel.SubSystems.Conversion;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CottonFMS.Fms.Sales.DTO_s
{
    public class SalesModel : EntityDto<long>
    {

        public DateTime Date { get; set; }

        [Column(TypeName = "decimal(12,2)")]
        public decimal? NetCharge { get; set; }

        public long? product_id { get; set; }


        public long? customer_id { get; set; }
        public string CustomerName { get; set; }



        public int? quantity { get; set; }


        [Column(TypeName = "decimal(12,2)")]
        public decimal price { get; set; }
    }
}
