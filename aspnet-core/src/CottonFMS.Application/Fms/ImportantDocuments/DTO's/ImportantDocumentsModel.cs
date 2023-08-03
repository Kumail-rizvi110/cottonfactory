using Abp.Application.Services.Dto;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace CottonFMS.Fms.ImportantDocuments.DTO_s
{
   public class ImportantDocumentsModel : EntityDto<long>
    {
        public DateTime Date { get; set; }
        public byte[] bytes { get; set; }
        public int UserTypeId { get; set; }
        
        public IFormFile File { get; set; }
        public string FileName { get; set; }


    }
}
