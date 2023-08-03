using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Text;

namespace CottonFMS.Fms.ImportantDocuments
{
  public  class ImportantDocuments : FullAuditedEntity<long>
    {
        public DateTime Date { get; set; }
        public string filePath { get; set; }
        public int UserTypeId { get; set; }

        public string FileName { get; set; }

    }
}
