using Abp.Domain.Repositories;
using Abp.Domain.Uow;
using Abp.EntityFrameworkCore;
using CottonFMS.EntityFrameworkCore;
using CottonFMS.Fms.ImportantDocuments.DTO_s;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Internal;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CottonFMS.Fms.ImportantDocuments
{
    public class ImportantDocumentsAppService : CottonFMSAppServiceBase
    {
        private CottonFMSDbContext _context => _dbContextProvider.GetDbContext();
        private readonly IDbContextProvider<CottonFMSDbContext> _dbContextProvider;
        private IRepository<ImportantDocuments, long> _repo;
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        public ImportantDocumentsAppService(
            IRepository<ImportantDocuments, long> repo
            )
        {
            this._repo = repo;
        }

        private bool Exist(long id)
        {
            return _repo.GetAll().Any(x => x.Id == id);
        }
        public async Task<string> Create(IFormFile imageFile)
        {
            try
            {


                string basePath = Path.Combine(Directory.GetCurrentDirectory(), "Files", @"D:\cottonfactory\Images");
                bool basePathExists = System.IO.Directory.Exists(basePath);
                if (!basePathExists) Directory.CreateDirectory(basePath);

               // var model = new FileOnFileSystemModel();
                string extension = Path.GetExtension(imageFile.FileName);
                string filePath = Path.Combine(basePath, Guid.NewGuid() + "-" + string.Concat(imageFile.FileName, extension));
                if (!System.IO.File.Exists(filePath))
                {
                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await imageFile.CopyToAsync(stream);
                    }
                    //model.FileType = file.ContentType;
                    //model.Extension = extension;
                    //model.Name = Path.GetFileNameWithoutExtension(file.FileName);
                    //model.FilePath = filePath;
                    ImportantDocuments model = new ImportantDocuments(); // Replace with your actual model instance
                    model.filePath = filePath;
                    model.UserTypeId = 1;
                    model.Date = DateTime.Now;
                    model.FileName = Path.GetFileNameWithoutExtension(imageFile.FileName);
                    _repo.Insert(model);
                }




                // Check if a file was provided
                //if (imageFile == null || imageFile.Length == 0)
                //{
                //    return ("No file provided");
                //}

                //// Read the file content into a byte array
                //byte[] fileBytes;
                //using (var memoryStream = new MemoryStream())
                //{
                //    imageFile.CopyTo(memoryStream);
                //    fileBytes = memoryStream.ToArray();
                //}
                //ImportantDocuments model = new ImportantDocuments(); // Replace with your actual model instance
                //model.Image = fileBytes;
                //model.UserTypeId = 1;
                //model.Date = DateTime.Now;
                //model.FileName = imageFile.FileName;
                //_repo.Insert(model);

                // Optionally, you can save the model to a database or perform additional operations

                return ("Image uploaded successfully");
            }
            catch (Exception ex)
            {
                return ex.Message;

            }

            //try
            //{



            //    bool exist = Exist(input.Id);
            //    if (exist)
            //    {
            //        var tem = _repo.Get(input.Id);
            //        if (tem != null)
            //        {

            //            //sales.Id = input.Id;
            //            //tem.customer_id = tem.Id;
            //            tem.NumbersOfTeamMembers = input.NumbersOfTeamMembers;
            //            tem.Name = input.Name;
            //            //tem.EmployeesTeamMembersId = input.EmployeesTeamMembersId;
            //            tem.ShiftsId = input.ShiftsId;




            //            //tem.Phone = input.Phone;
            //            //tem.email = input.email;
            //            //tem.Address = input.Address;

            //            _repo.Update(tem);
            //            return "2";
            //        }



            //    }

            //    else
            //    {

            //        //EmployeesTeam team = new EmployeesTeam(
            //        EmployeesTeam team = new EmployeesTeam();
            //        //sales.Id = input.Id;
            //        team.NumbersOfTeamMembers = input.NumbersOfTeamMembers;
            //        team.Name = input.Name;
            //        //team.EmployeesTeamMembersId = input.EmployeesTeamMembersId;
            //        team.ShiftsId = input.ShiftsId;

            //        //attendance.DateOfBuying = input.DateOfBuying;

            //        //payments.Phone = input.Phone;
            //        //payments.email = input.email;
            //        //payments.Address = input.Address;

            //        _repo.Insert(team);
            //        return "1";
            //    }

            return "Error";

            //    // return "Successfully Issued";



            //}

            //catch (Exception ex)
            //{

            //    throw ex;
            //}

        }

        public async Task<List<ImportantDocumentsModel>> GetImportantDocumentsById(int Id)
        {

            //var result = ObjectMapper.Map<EmployeesTeamModel>(entity);
            var result = _repo.GetAllList(x => x.UserTypeId == Id);
            //return null;

            //if (result.Count > 0)
            //{
            List<ImportantDocumentsModel> document = new List<ImportantDocumentsModel>();

            foreach (var item in result)
            {
                if (item.filePath != null)
                {


                    var userImages = new ImportantDocumentsModel();
                    //string pattern = @"(?<=\\)[a-zA-Z]+(?=\\[^\\]+$)";
                    //Match match = Regex.Match(item, pattern);
                    //string fileName = match.Value;
                    string contentType = Path.GetExtension(item.filePath)?.Substring(1);

                    if (File.Exists(item.filePath))
                    {
                        var stream = File.OpenRead(item.filePath);
                        IFormFile file = new FormFile(stream, 0, stream.Length, Path.GetFileNameWithoutExtension(stream.Name), Path.GetFileName(stream.Name))
                        {
                            Headers = new HeaderDictionary(),
                            ContentType = "image/" + contentType
                        };
                        userImages.File = file;
                        userImages.FileName = item.FileName;
                        userImages.bytes = File.ReadAllBytes(item.filePath);
                        stream.Close();
                    }


                    document.Add(userImages);
                }
            }
            return document;
                //  }

        }

        ////[HttpPost]
        //public async Task<IActionResult> UploadImage(IFormFile image)
        //{
        //    try
        //    {
        //        if (image == null || image.Length == 0)
        //            return BadRequest("Invalid file");

        //        var uniqueFileName = $"{Guid.NewGuid().ToString()}_{image.FileName}";

        //        var filePath = Path.Combine(_environment.WebRootPath, "images", uniqueFileName);

        //        using (var stream = new FileStream(filePath, FileMode.Create))  
        //        {
        //            await image.CopyToAsync(stream);
        //        }

        //        // Save the uniqueFileName and filePath in the database

        //        return Ok("Image uploaded successfully");
        //    }
        //    catch (Exception ex)
        //    {
        //        return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        //    }
        //}
    }
}
