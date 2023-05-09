using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace CottonFMS.Fms.Assets.DTO_s
{
   public class AssetsModel : EntityDto<long>
    {
        public string FirstName { get; set; }
        public decimal Cost { get; set; }
        public DateTime DateOfBuying { get; set; }
    }
}
