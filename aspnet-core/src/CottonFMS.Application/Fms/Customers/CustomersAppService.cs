using Abp.Domain.Repositories;
using Abp.Domain.Uow;
using Abp.EntityFrameworkCore;
using CottonFMS.EntityFrameworkCore;
using CottonFMS.Fms;
using CottonFMS.Fms.Customers;
using CottonFMS.Fms.Customers.DTO_s;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CottonFMS.Fms.Customers
{
   public class CustomersAppService : CottonFMSAppServiceBase
    {
        private CottonFMSDbContext _context => _dbContextProvider.GetDbContext();
        private readonly IDbContextProvider<CottonFMSDbContext> _dbContextProvider;
        private readonly IRepository<Customers, long> _repo;
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        public CustomersAppService(
            IRepository<Customers, long> repo
            )
        {
            this._repo = repo;
        }

        private bool Exist(long id)
        {
            return _repo.GetAll().Any(x => x.Id == id);
        }
        public async Task<string> Create(CustomersModel input)
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
                        tem.FirstName = input.FirstName;
                        tem.LastName = input.LastName;
                        tem.Phone = input.Phone;
                        tem.email = input.email;
                        tem.Address = input.Address;

                        _repo.Update(tem);
                        return "Updte Successfully";
                    }



                }

                else
                {
                    Customers customers = new Customers();
                    //sales.Id = input.Id;
                    customers.FirstName = input.FirstName;
                    customers.LastName = input.LastName;
                    customers.Phone = input.Phone;
                    customers.email = input.email;
                    customers.Address = input.Address;

                    _repo.Insert(customers);
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

        private List<CustomersModel> GetPage(List<CustomersModel> list)
        {
            return list.ToList(); //(page * pageSize).Take(pageSize)
        }


        public async Task<CustomersPageModel> PostFilterData(Dictionary<string, string> keyValuePairs)
        {
            // string IssueDateFrom;

            try
            {


                string itemName = string.Empty;
                var result = new CustomersPageModel();
                var customerslist = new List<CustomersModel>();
                var getDate = DateTime.Now.ToString();
                var splitDate = getDate.Split(" ");
                var finalDate = Convert.ToDateTime(splitDate[0]);
                var datefrom = keyValuePairs.Select(x => x.Value[3]);


                var customers = await _repo.GetAll().Where(x => x.IsDeleted != true).OrderByDescending(x => x.CreationTime).ToListAsync();

                customerslist = ObjectMapper.Map<List<CustomersModel>>(customers);

                foreach (var property in keyValuePairs)
                {

                    var searchValue = property.Value;
                    switch (property.Key)
                    {
                        case "Keyword":
                            if (searchValue != "" && searchValue != null)
                            {
                                //issuelist = issuelist.Where(x => (x.pName).ToLower() == (searchValue).ToLower() || x.Mrno == searchValue).ToList();
                                customerslist = customerslist.Where(x => x.FirstName == Convert.ToString(searchValue)).ToList();
                            }
                            break;
                        case "Phone":
                            if (searchValue != "" && searchValue != null)
                            {
                                customerslist = customerslist.Where(x => x.Phone == Convert.ToInt32(searchValue)).ToList();
                            }
                            break;

                        

                    }
                }

                result.TotalCount = customerslist.Count;

                result.CustomersModel = GetPage(customerslist);


                return result;

            }
            catch (Exception ex)
            {

                throw ex;
            }


        }

        public async Task<CustomersModel> GetCustomersById(int Id)
        {
            var entity = await _repo.GetAll().Where(x => x.Id == Id).FirstOrDefaultAsync();

            var result = ObjectMapper.Map<CustomersModel>(entity);

            return result;
        }

    }
}
