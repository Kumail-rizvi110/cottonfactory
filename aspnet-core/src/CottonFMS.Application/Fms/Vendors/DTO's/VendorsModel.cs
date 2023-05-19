using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace CottonFMS.Fms.Vendors.DTO_s
{
  public  class VendorsModel : EntityDto<long>
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }
        public int Phone { get; set; }
        public string email { get; set; }
        public string Address { get; set; }
        //public DateTime Date { get; set; }


    }
}
