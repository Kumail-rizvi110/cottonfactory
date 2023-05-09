using System;
using System.Collections.Generic;
using System.Text;

namespace CottonFMS.Fms.Assets.DTO_s
{
  public  class AssetsPageModel
    {
        public List<AssetsModel> AssetsModel { get; set; }
        public int TotalCount { get; set; }
    }
}
