using Abp.Domain.Repositories;
using Abp.Domain.Uow;
using Abp.EntityFrameworkCore;
using CottonFMS.EntityFrameworkCore;
using CottonFMS.Fms.Production.DTO_s;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CottonFMS.Fms.ProductionPlan
{
  public  class ProductionAppService : CottonFMSAppServiceBase
    {
        private CottonFMSDbContext _context => _dbContextProvider.GetDbContext();
        private readonly IDbContextProvider<CottonFMSDbContext> _dbContextProvider;
        private IRepository<ProductionPlan, long> _repo;
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        public ProductionAppService(
            IRepository<ProductionPlan, long> repo
            )
        {
            this._repo = repo;
        }

        private bool Exist(long id)
        {
            return _repo.GetAll().Any(x => x.Id == id);
        }
        public async Task<string> Create(ProductionModel input)
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
                        tem.ProductionDate = input.ProductionDate;
                        tem.EmployeesTeamId = input.EmployeesTeamId;
                        tem.TimeTaken = input.TimeTaken;
                        tem.Quality = input.Quality;
                        tem.CottonProduced = input.CottonProduced;

                        tem.CottonFiberUsed = input.CottonFiberUsed;
    
                        //tem.Phone = input.Phone;
                        //tem.email = input.email;
                        //tem.Address = input.Address;

                        _repo.Update(tem);
                        return "2";
                    }



                }

                else
                {
                    ProductionPlan production = new ProductionPlan();
                    //sales.Id = input.Id;
                    production.ProductionDate = input.ProductionDate;
                    production.EmployeesTeamId = input.EmployeesTeamId;
                    production.TimeTaken = input.TimeTaken;
                    
                    production.Quality = input.Quality;

                    production.CottonProduced = input.CottonProduced;
                    production.CottonFiberUsed = input.CottonFiberUsed;

                    //payments.Phone = input.Phone;
                    //payments.email = input.email;
                    //payments.Address = input.Address;

                    _repo.Insert(production);
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

        private List<ProductionModel> GetPage(List<ProductionModel> list)
        {
            return list.ToList(); //(page * pageSize).Take(pageSize)
        }


        public async Task<ProductionPageModel> PostFilterData(Dictionary<string, string> keyValuePairs)
        {
            // string IssueDateFrom;

            try
            {


                string itemName = string.Empty;
                var result = new ProductionPageModel();
                var productionlist = new List<ProductionModel>();


                var production = await _repo.GetAll().Where(x => x.IsDeleted != true).OrderByDescending(x => x.CreationTime).ToListAsync();

                productionlist = ObjectMapper.Map<List<ProductionModel>>(production);

                foreach (var property in keyValuePairs)
                {

                    var searchValue = property.Value;
                    switch (property.Key)
                    {
                        //case "Keyword":
                        //    if (searchValue != "" && searchValue != null)
                        //    {
                        //        //issuelist = issuelist.Where(x => (x.pName).ToLower() == (searchValue).ToLower() || x.Mrno == searchValue).ToList();
                        //        paymentslist = paymentslist.Where(x => x.Amount == Convert.ToInt32(searchValue)).ToList();
                        //    }
                        //    break;
                        //case "DateFrom":
                        //    if (searchValue != "" && searchValue != null)
                        //    {
                        //        paymentslist = paymentslist.Where(x => Convert.ToDateTime(x.PaymentDate) >= Convert.ToDateTime(searchValue)).ToList();
                        //    }
                        //    break;
                        //case "DateTo":
                        //    if (searchValue != "" && searchValue != null)
                        //    {
                        //        paymentslist = paymentslist.Where(x => Convert.ToDateTime(x.PaymentDate) <= Convert.ToDateTime(searchValue)).ToList();
                        //    }
                        //    break;

                            //case "Phone":
                            //    if (searchValue != "" && searchValue != null)
                            //    {
                            //        paymentslist = paymentslist.Where(x => x.PaymentDate == Convert.ToDateTime(searchValue)).ToList();
                            //    }
                            //    break;



                    }
                }

                result.TotalCount = productionlist.Count;

                result.ProductionModel = GetPage(productionlist);


                return result;

            }
            catch (Exception ex)
            {

                throw ex;
            }


        }

        public async Task<ProductionModel> GetProductionById(int Id)
        {
            var entity = await _repo.GetAll().Where(x => x.Id == Id).FirstOrDefaultAsync();

            var result = ObjectMapper.Map<ProductionModel>(entity);

            return result;
        }

    }
}
