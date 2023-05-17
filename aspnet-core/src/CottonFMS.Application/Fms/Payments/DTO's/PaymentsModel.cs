using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace CottonFMS.Fms.Payments.DTO_s
{
  public  class PaymentsModel : EntityDto<long>
    {
        public long? OrdersId { get; set; }
        public long? CustomersId { get; set; }
        public int Amount { get; set; }
        public DateTime PaymentDate { get; set; }
    }
}
