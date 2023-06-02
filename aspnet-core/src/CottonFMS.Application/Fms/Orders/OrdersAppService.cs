using Abp.Domain.Repositories;
using Abp.Domain.Uow;
using Abp.EntityFrameworkCore;
using CottonFMS.EntityFrameworkCore;
using CottonFMS.Fms.Orders.DTO_s;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;



namespace CottonFMS.Fms.Orders
{
   public class OrdersAppService : CottonFMSAppServiceBase
    {
        private CottonFMSDbContext _context => _dbContextProvider.GetDbContext();
        private readonly IDbContextProvider<CottonFMSDbContext> _dbContextProvider;
        private IRepository<Orders, long> _repo;
        private IRepository<CottonInventory.CottonInventory, long> repository;
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        public OrdersAppService(
            IRepository<Orders, long> repo,
        IRepository<CottonInventory.CottonInventory, long> repository
            )
        {
            this._repo = repo;
             this.repository = repository;
        }

        private bool Exist(long id)
        {
            return _repo.GetAll().Any(x => x.Id == id);
        }
        public async Task<string> Create(OrdersModel input)
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
                        tem.CottonQuantity = input.CottonQuantity;
                        tem.CottonQuality = input.CottonQuality;
                        tem.OrderDate = input.OrderDate;
                        tem.CustomersId = input.CustomersId;
                        tem.CottonInventoryId = input.CottonInventoryId;

                        var temp = 
                        //tem.email = input.email;
                        //tem.Address = input.Address;

                        _repo.Update(tem);
                        return "2";
                    }



                }

                else
                {
                    Orders orders = new Orders();
                    //sales.Id = input.Id;
                    orders.CottonQuantity = input.CottonQuantity;
                    orders.CottonQuality = input.CottonQuality;
                    orders.OrderDate = input.OrderDate;
                    orders.CustomersId = input.CustomersId;
                    orders.CottonInventoryId = input.CottonInventoryId;



                    _repo.Insert(orders);
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

        private List<OrdersModel> GetPage(List<OrdersModel> list)
        {
            return list.ToList(); //(page * pageSize).Take(pageSize)
        }


        public async Task<OrdersPageModel> PostFilterData(Dictionary<string, string> keyValuePairs)
        {
            // string IssueDateFrom;

            try
            {


                string itemName = string.Empty;
                var result = new OrdersPageModel();
                var orderslist = new List<OrdersModel>();


                var orders = await _repo.GetAll().Include(x=>x.Customers).Where(x => x.IsDeleted != true).OrderByDescending(x => x.CreationTime).ToListAsync();

                orderslist = ObjectMapper.Map<List<OrdersModel>>(orders);

                foreach (var property in keyValuePairs)
                {

                    var searchValue = property.Value;
                    switch (property.Key)
                    {
                        case "Keyword":
                            if (searchValue != "" && searchValue != null)
                            {
                                //issuelist = issuelist.Where(x => (x.pName).ToLower() == (searchValue).ToLower() || x.Mrno == searchValue).ToList();
                                orderslist = orderslist.Where(x => x.CottonQuality == Convert.ToString(searchValue)).ToList();
                            }
                            break;
                        case "Phone":
                            if (searchValue != "" && searchValue != null)
                            {
                                orderslist = orderslist.Where(x => x.CottonQuantity == Convert.ToInt32(searchValue)).ToList();
                            }
                            break;



                    }
                }

                result.TotalCount = orderslist.Count;

                result.OrdersModel = GetPage(orderslist);


                return result;

            }
            catch (Exception ex)
            {

                throw ex;
            }


        }

        public async Task<OrdersModel> GetOrdersById(int Id)
        {
            var entity = await _repo.GetAll().Where(x => x.Id == Id).FirstOrDefaultAsync();

            var result = ObjectMapper.Map<OrdersModel>(entity);

            return result;
        }

    }
}
