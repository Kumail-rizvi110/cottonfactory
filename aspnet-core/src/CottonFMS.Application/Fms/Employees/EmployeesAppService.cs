using Abp.Domain.Repositories;
using Abp.Domain.Uow;
using Abp.EntityFrameworkCore;
using CottonFMS.EntityFrameworkCore;
using CottonFMS.Fms.Employees.DTO_s;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CottonFMS.Fms.Employees
{
   public class EmployeesAppService : CottonFMSAppServiceBase
    {
        private CottonFMSDbContext _context => _dbContextProvider.GetDbContext();
        private readonly IDbContextProvider<CottonFMSDbContext> _dbContextProvider;
        private IRepository<Employees, long> _repo;
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        public EmployeesAppService(
            IRepository<Employees, long> repo
            )
        {
            this._repo = repo;
        }

        private bool Exist(long id)
        {
            return _repo.GetAll().Any(x => x.Id == id);
        }
        public async Task<string> Create(EmployeesModel input)
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
                        tem.FirstName = input.FirstName;
                        tem.LastName = input.LastName;
                        tem.email = input.email;
                        tem.Address = input.Address;
                        tem.Pay = input.Pay;
                        tem.Rank = input.Rank;
                        tem.Phone = input.Phone;

                        tem.DateOfJoinning = input.DateOfJoinning;




                        //tem.Phone = input.Phone;
                        //tem.email = input.email;
                        //tem.Address = input.Address;

                        _repo.Update(tem);
                        return "2";
                    }



                }

                else
                {
                    Employees employees = new Employees();
                    //sales.Id = input.Id;
                    employees.FirstName = input.FirstName;
                    employees.LastName = input.LastName;
                    employees.Phone = input.Phone;
                    employees.email = input.email;
                    employees.Address = input.Address;
                    employees.Pay = input.Pay;
                    employees.Rank = input.Rank;
                    employees.DateOfJoinning = input.DateOfJoinning;


                    //attendance.DateOfBuying = input.DateOfBuying;

                    //payments.Phone = input.Phone;
                    //payments.email = input.email;
                    //payments.Address = input.Address;

                    _repo.Insert(employees);
                    return "1";
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

        private List<EmployeesModel> GetPage(List<EmployeesModel> list)
        {
            return list.ToList(); //(page * pageSize).Take(pageSize)
        }


        public async Task<EmployeesPageModel> PostFilterData(Dictionary<string, string> keyValuePairs)
        {
            // string IssueDateFrom;

            try
            {


                string itemName = string.Empty;
                var result = new EmployeesPageModel();
                var employeeslist = new List<EmployeesModel>();


                var employees = await _repo.GetAll().Where(x => x.IsDeleted != true).OrderByDescending(x => x.CreationTime).ToListAsync();

                employeeslist = ObjectMapper.Map<List<EmployeesModel>>(employees);

                foreach (var property in keyValuePairs)
                {

                    var searchValue = property.Value;
                    switch (property.Key)
                    {
                      
                        case "DateFrom":
                            if (searchValue != "" && searchValue != null)
                            {
                                employeeslist = employeeslist.Where(x => Convert.ToDateTime(x.DateOfJoinning) >= Convert.ToDateTime(searchValue)).ToList();
                            }
                            break;
                        case "DateTo":
                            if (searchValue != "" && searchValue != null)
                            {
                                employeeslist = employeeslist.Where(x => Convert.ToDateTime(x.DateOfJoinning) <= Convert.ToDateTime(searchValue)).ToList();
                            }
                            break;
                        case "Name":
                            if (searchValue != "" && searchValue != null)
                            {
                                //issuelist = issuelist.Where(x => (x.pName).ToLower() == (searchValue).ToLower() || x.Mrno == searchValue).ToList();
                                employeeslist = employeeslist.Where(x => x.FirstName == Convert.ToString(searchValue)).ToList();
                            }
                            break;
                            //case "DateOfJoinning":
                            //    if (searchValue != "" && searchValue != null)
                            //    {
                            //        employeeslist = employeeslist.Where(x => x.DateOfJoinning == Convert.ToDateTime(searchValue)).ToList();
                            //    }
                            //    break;



                    }
                }

                result.TotalCount = employeeslist.Count;

                result.EmployeesModel = GetPage(employeeslist);


                return result;

            }
            catch (Exception ex)
            {

                throw ex;
            }


        }

        public async Task<EmployeesModel> GetEmployeesById(int Id)
        {
            var entity = await _repo.GetAll().Where(x => x.Id == Id).FirstOrDefaultAsync();

            var result = ObjectMapper.Map<EmployeesModel>(entity);

            return result;
        }

        public async Task<List<GetEmployees>> GetAllEmployees()
        {
            try
            {
                List<GetEmployees> result = new List<GetEmployees>();
                var emp = _repo.GetAllListAsync();
                // result = ObjectMapper.Map<List<GetCustomers>>(customers);

                foreach (var employees in emp.Result)
                {
                    GetEmployees Emp = new GetEmployees();
                    Emp.Name = employees.FirstName + ' ' + employees.LastName;
                    Emp.Id = (int)employees.Id;
                    result.Add(Emp);
                }

                return result;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }


    }
}
