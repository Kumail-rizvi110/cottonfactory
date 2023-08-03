using System;
using System.Collections.Generic;
using System.Text;

namespace CottonFMS.Fms.Production.DTO_s
{
  public  class ProductionPageModel
    {
        public List<ProductionModel> ProductionModel { get; set; }
        public int TotalCount { get; set; }
    }
}
