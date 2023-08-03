using Abp.Domain.Repositories;
using Abp.Domain.Uow;
using Abp.EntityFrameworkCore;
using CottonFMS.EntityFrameworkCore;
using CottonFMS.Fms.EmployeesTeam.DTO_s;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CottonFMS.Fms.EmployeesTeam
{
   public class EmployeesTeamAppService : CottonFMSAppServiceBase
    {
        private CottonFMSDbContext _context => _dbContextProvider.GetDbContext();
        private readonly IDbContextProvider<CottonFMSDbContext> _dbContextProvider;
        private IRepository<EmployeesTeam, long> _repo;
        private IRepository<Shifts.Shifts, long> _reposhift;
    
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        public EmployeesTeamAppService(
            IRepository<EmployeesTeam, long> repo,
            IRepository<Shifts.Shifts, long> reposhift

            )
        {
            this._repo = repo;
            this._reposhift = reposhift;
        }

        private bool Exist(long id)
        {
            return _repo.GetAll().Any(x => x.Id == id);
        }
        public async Task<string> Create(EmployeesTeamModel input)
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
                        tem.NumbersOfTeamMembers = input.NumbersOfTeamMembers; 
                        tem.Name = input.Name;
                        //tem.EmployeesTeamMembersId = input.EmployeesTeamMembersId;
                        tem.ShiftsId = input.ShiftsId;




                        //tem.Phone = input.Phone;
                        //tem.email = input.email;
                        //tem.Address = input.Address;

                        _repo.Update(tem);
                        return "2";
                    }



                }

                else
                {

                    //EmployeesTeam team = new EmployeesTeam(
                    EmployeesTeam team = new EmployeesTeam();
                    //sales.Id = input.Id;
                    team.NumbersOfTeamMembers = input.NumbersOfTeamMembers;
                    team.Name = input.Name;
                    //team.EmployeesTeamMembersId = input.EmployeesTeamMembersId;
                    team.ShiftsId = input.ShiftsId;

                    //attendance.DateOfBuying = input.DateOfBuying;

                    //payments.Phone = input.Phone;
                    //payments.email = input.email;
                    //payments.Address = input.Address;

                    _repo.Insert(team);
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


        public async Task<List<GetShifts>> GetAllShifts()
        {
            try
            {
                List<GetShifts> result = new List<GetShifts>();
                var cus = _repo.GetAllListAsync();
                // result = ObjectMapper.Map<List<GetCustomers>>(customers);

                foreach (var shifts in cus.Result)
                {
                    GetShifts Cus = new GetShifts();
                    Cus.Name = shifts.Name + ' ' ;
                    Cus.Id = (int)shifts.Id;
                    result.Add(Cus);
                }

                return result;
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

        private List<EmployeesTeamModel> GetPage(List<EmployeesTeamModel> list)
        {
            return list.ToList(); //(page * pageSize).Take(pageSize)
        }


        public async Task<EmployeesTeamPageModel> PostFilterData(Dictionary<string, string> keyValuePairs)
        {
            // string IssueDateFrom;

            try
            {


                string itemName = string.Empty;
                var result = new EmployeesTeamPageModel();
                var teamlist = new List<EmployeesTeamModel>();


                var team = await _repo.GetAll().Where(x => x.IsDeleted != true).OrderByDescending(x => x.CreationTime).ToListAsync();

                teamlist = ObjectMapper.Map<List<EmployeesTeamModel>>(team);

                foreach (var property in keyValuePairs)
                {

                    var searchValue = property.Value;
                    switch (property.Key)
                    {
                        //case "Keyword":
                        //    if (searchValue != "" && searchValue != null)
                        //    {
                        //        teamlist = teamlist.Where(x => Convert.ToDateTime(x.Date) >= Convert.ToDateTime(searchValue)).ToList();
                        //    }
                        //    break;
                        //case "DateTo":
                        //    if (searchValue != "" && searchValue != null)
                        //    {
                        //        teamlist = teamlist.Where(x => Convert.ToDateTime(x.Date) <= Convert.ToDateTime(searchValue)).ToList();
                        //    }
                        //    break;
                        case "Name":
                            if (searchValue != "" && searchValue != null)
                            {
                                teamlist = teamlist.Where(x => x.Name == Convert.ToString(searchValue)).ToList();
                            }
                            break;



                    }
                }

                result.TotalCount = teamlist.Count;

                result.EmployeesTeamModel = GetPage(teamlist);


                return result;

            }
            catch (Exception ex)
            {

                throw ex;
            }


        }

        public async Task<EmployeesTeamModel> GetEmployeesTeamById(int Id)
        {
            var entity = await _repo.GetAll().Where(x => x.Id == Id).FirstOrDefaultAsync();

            var result = ObjectMapper.Map<EmployeesTeamModel>(entity);

            return result;
        }

        public async Task<List<GetEmployeesTeam>> GetAllEmployeesTeam()
        {
            try
            {
                List<GetEmployeesTeam> result = new List<GetEmployeesTeam>();
                var emp = _repo.GetAllListAsync();
                // result = ObjectMapper.Map<List<GetCustomers>>(customers);

                foreach (var teams in emp.Result)
                {
                    GetEmployeesTeam Ast = new GetEmployeesTeam();
                    Ast.Name = teams.Name + ' ';
                    Ast.Id = (int)teams.Id;
                    result.Add(Ast);
                }

                return result;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public async Task<List<dynamic>> GetShifts()
        {
            var result = new List<dynamic>();
            try
            {
                var lab = await _reposhift.GetAll().ToListAsync();
                foreach (var item in lab)
                {
                    var dynamicObject = new ExpandoObject() as IDictionary<string, object>;
                    dynamicObject["Id"] = item.Id;
                    dynamicObject["Name"] = item.Name;
                    result.Add(dynamicObject);
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
