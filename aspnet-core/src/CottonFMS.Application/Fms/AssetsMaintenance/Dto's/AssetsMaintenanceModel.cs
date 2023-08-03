using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace CottonFMS.Fms.AssetsMaintenance.Dto_s
{
   public class AssetsMaintenanceModel : EntityDto<long>
    {
        public decimal Cost { get; set; }
        public DateTime MaintenanceDate { get; set; }
        public string Description { get; set; }
        public long? AssetsId { get; set; }

        public string MaintenanceTime { get; set; }

    }
}
