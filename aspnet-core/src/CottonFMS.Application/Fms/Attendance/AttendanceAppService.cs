using Abp.Domain.Repositories;
using Abp.Domain.Uow;
using Abp.EntityFrameworkCore;
using CottonFMS.EntityFrameworkCore;
using CottonFMS.Fms.Attendance.DTO_s;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CottonFMS.Fms.Attendance
{
   public class AttendanceAppService : CottonFMSAppServiceBase
    {
        private CottonFMSDbContext _context => _dbContextProvider.GetDbContext();
        private readonly IDbContextProvider<CottonFMSDbContext> _dbContextProvider;
        private IRepository<Attendance, long> _repo;
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        public AttendanceAppService(
            IRepository<Attendance, long> repo
            )
        {
            this._repo = repo;
        }

        private bool Exist(long id)
        {
            return _repo.GetAll().Any(x => x.Id == id);
        }
        public async Task<string> Create(AttendanceModel input)
        {

            try
            {



                bool exist = Exist(input.Id);
                if (exist)
                {
                    var tem = _repo.Get(input.Id);
                    if (tem != null)
                    {

                        //sales.Id = input.Id;
                        //tem.customer_id = tem.Id;
                        tem.AttendanceMark = input.AttendanceMark;
                        tem.Date = input.Date;
                        tem.EmployeesId = input.EmployeesId;



                        //tem.Phone = input.Phone;
                        //tem.email = input.email;
                        //tem.Address = input.Address;

                        _repo.Update(tem);
                        return "Updte Successfully";
                    }



                }

                else
                {
                    Attendance attendance = new Attendance();
                    //sales.Id = input.Id;
                    attendance.AttendanceMark = input.AttendanceMark;
                    attendance.Date = input.Date;
                    attendance.EmployeesId = input.EmployeesId;

                    //attendance.DateOfBuying = input.DateOfBuying;

                    //payments.Phone = input.Phone;
                    //payments.email = input.email;
                    //payments.Address = input.Address;

                    _repo.Insert(attendance);
                    return "Insert Successfully";
                }

                return "Error";

                // return "Successfully Issued";



            }

            catch (Exception ex)
            {

                throw ex;
            }

        }


        public async Task<string> Delete(long id)
        {
            try
            {
                if (id > 0)
                {
                    var items = _repo.GetAll().Where(x => x.Id == id).FirstOrDefault();

                    _repo.Delete(id);

                    return "Delete Successfully";
                }
                else
                {
                    throw new Exception("file with null contents");
                }
            }
            catch (Exception ex)
            {
                throw new Exception($"internal server error {ex.Message}");
            }
        }

        private List<AttendanceModel> GetPage(List<AttendanceModel> list)
        {
            return list.ToList(); //(page * pageSize).Take(pageSize)
        }


        public async Task<AttendancePageModel> PostFilterData(Dictionary<string, string> keyValuePairs)
        {
            // string IssueDateFrom;

            try
            {


                string itemName = string.Empty;
                var result = new AttendancePageModel();
                var attendancelist = new List<AttendanceModel>();


                var attendance = await _repo.GetAll().Where(x => x.IsDeleted != true).OrderByDescending(x => x.CreationTime).ToListAsync();

                attendancelist = ObjectMapper.Map<List<AttendanceModel>>(attendance);

                foreach (var property in keyValuePairs)
                {

                    var searchValue = property.Value;
                    switch (property.Key)
                    {
                        case "Keyword":
                            if (searchValue != "" && searchValue != null)
                            {
                                //issuelist = issuelist.Where(x => (x.pName).ToLower() == (searchValue).ToLower() || x.Mrno == searchValue).ToList();
                                attendancelist = attendancelist.Where(x => x.AttendanceMark == Convert.ToString(searchValue)).ToList();
                            }
                            break;
                        case "Phone":
                            if (searchValue != "" && searchValue != null)
                            {
                                attendancelist = attendancelist.Where(x => x.Date == Convert.ToDateTime(searchValue)).ToList();
                            }
                            break;



                    }
                }

                result.TotalCount =  attendancelist.Count;

                result.AttendanceModel = GetPage(attendancelist);


                return result;

            }
            catch (Exception ex)
            {

                throw ex;
            }


        }

        public async Task<AttendanceModel> GetVendorsById(int Id)
        {
            var entity = await _repo.GetAll().Where(x => x.Id == Id).FirstOrDefaultAsync();

            var result = ObjectMapper.Map<AttendanceModel>(entity);

            return result;
        }

    }
}
