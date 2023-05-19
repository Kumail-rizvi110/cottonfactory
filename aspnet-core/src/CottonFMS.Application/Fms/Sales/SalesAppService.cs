using Abp.Application.Services;
using Abp.Domain.Repositories;
using Abp.Domain.Uow;
using Abp.EntityFrameworkCore;
using CottonFMS.EntityFrameworkCore;
using CottonFMS.Fms.Sales.DTO_s;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CottonFMS.Fms.Sales
{
    public class SalesAppService : CottonFMSAppServiceBase
    {
        private CottonFMSDbContext _context => _dbContextProvider.GetDbContext();
        private readonly IDbContextProvider<CottonFMSDbContext> _dbContextProvider;
        private IRepository<Sales, long> _repo;

        private readonly IUnitOfWorkManager _unitOfWorkManager;
        public SalesAppService(
            IRepository<Sales, long> repo
            ) 
        {
            this._repo = repo;
        }

        private bool Exist(long id)
        {
            return _repo.GetAll().Any(x => x.Id == id);
        }
        public async Task<string> Create(SalesModel input)
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
                            
                            tem.customer_id = input.customer_id;
                            tem.price = input.price;
                            tem.quantity = input.quantity;
                            tem.Date = input.Date;
                            tem.NetCharge = input.NetCharge;
                            tem.price = input.price;

                            _repo.Update(tem);
                            return "2";
                        }
                             

                           
                        }

                        else
                        {
                            Sales sales = new Sales();
                           //sales.Id = input.Id;
                           sales.customer_id = input.customer_id;
                          sales.price = input.price; 
                          sales.quantity = input.quantity;
                          sales.Date = input.Date;
                            sales.NetCharge = input.NetCharge;
                           sales.price = input.price;

                            _repo.Insert(sales);
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
                    var items =  _repo.GetAll().Where(x => x.Id == id).FirstOrDefault();
                   
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

        private List<SalesModel> GetPage(List<SalesModel> list)
        {
            return list.ToList(); //(page * pageSize).Take(pageSize)
        }


        public async Task<SalesPageModel> PostFilterData(Dictionary<string, string> keyValuePairs)
        {
            // string IssueDateFrom;

            try
            {


                string itemName = string.Empty;
                var result = new SalesPageModel();
                var saleslist = new List<SalesModel>();
                var getDate = DateTime.Now.ToString();
                var splitDate = getDate.Split(" ");
                var finalDate = Convert.ToDateTime(splitDate[0]);
                var datefrom = keyValuePairs.Select(x => x.Value[3]);


                var sales = await _repo.GetAll().Where(x => x.IsDeleted != true).OrderByDescending(x => x.Date).ToListAsync();

                saleslist = ObjectMapper.Map<List<SalesModel>>(sales);

                foreach (var property in keyValuePairs)
                {

                    var searchValue = property.Value;
                    switch (property.Key)
                    {
                        case "Keyword":
                            if (searchValue != "" && searchValue != null)
                            {
                                //issuelist = issuelist.Where(x => (x.pName).ToLower() == (searchValue).ToLower() || x.Mrno == searchValue).ToList();
                                saleslist = saleslist.Where(x => x.customer_id == Convert.ToInt32(searchValue)).ToList();
                            }
                            break;
                        case "ProductId":
                            if (searchValue != "" && searchValue != null)
                            {
                                saleslist = saleslist.Where(x => x.product_id == Convert.ToInt32(searchValue)).ToList();
                            }
                            break;
                        
                        case "DateFrom":
                            if (searchValue != "" && searchValue != null)
                            {
                                saleslist = saleslist.Where(x => Convert.ToDateTime(x.Date) >= Convert.ToDateTime(searchValue)).ToList();
                            }
                            break;
                        case "DateTo":
                            if (searchValue != "" && searchValue != null)
                            {
                                saleslist = saleslist.Where(x => Convert.ToDateTime(x.Date) <= Convert.ToDateTime(searchValue)).ToList();
                            }
                            break;
                      
                    }
                }

                result.TotalCount = saleslist.Count;
        
                result.SalesModel = GetPage(saleslist);

                
                return result;

            }
            catch (Exception ex)
            {

                throw ex;
            }


        }

        public async Task<SalesModel> GetSaleById(int Id)
        {
            var entity = await _repo.GetAll().Where(x => x.Id == Id).FirstOrDefaultAsync();
  
            var result = ObjectMapper.Map<SalesModel>(entity);
           
            return result;
        }

    }
}
