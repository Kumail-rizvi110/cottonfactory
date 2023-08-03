using System;
using System.Collections.Generic;
using System.Text;

namespace CottonFMS.Fms.AssetsMaintenance.Dto_s
{
  public  class AssetsMaintenancePageModel
    {
        public List<AssetsMaintenanceModel> AssetsMaintenanceModel { get; set; }
        public int TotalCount { get; set; }
    }
}
