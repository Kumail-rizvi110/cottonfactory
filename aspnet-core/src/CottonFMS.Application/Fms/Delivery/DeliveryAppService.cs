using Abp.Domain.Repositories;
using Abp.Domain.Uow;
using Abp.EntityFrameworkCore;
using CottonFMS.EntityFrameworkCore;
using CottonFMS.Fms.Delivery.DTO_s;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CottonFMS.Fms.Delivery
{
  public  class DeliveryAppService : CottonFMSAppServiceBase
    {
        private CottonFMSDbContext _context => _dbContextProvider.GetDbContext();
        private readonly IDbContextProvider<CottonFMSDbContext> _dbContextProvider;
        private IRepository<Delivery, long> _repo;
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        public DeliveryAppService(
            IRepository<Delivery, long> repo
            )
        {
            this._repo = repo;
        }

        private bool Exist(long id)
        {
            return _repo.GetAll().Any(x => x.Id == id);
        }
        public async Task<string> Create(DeliveryModel input)
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
                        tem.Address = input.Address;
                        tem.DeliveryDate = input.DeliveryDate;
                        tem.OrdersId = input.OrdersId;
                        tem.CustomersId = input.CustomersId;
                        //tem.Phone = input.Phone;
                        //tem.email = input.email;
                        //tem.Address = input.Address;

                        _repo.Update(tem);
                        return "2";
                    }



                }

                else
                {
                    Delivery delivery = new Delivery();
                    //sales.Id = input.Id;
                    delivery.Address = input.Address;
                    delivery.DeliveryDate = input.DeliveryDate;
                    delivery.OrdersId = input.OrdersId;
                    delivery.CustomersId = input.CustomersId;
                    //payments.Phone = input.Phone;
                    //payments.email = input.email;
                    //payments.Address = input.Address;

                    _repo.Insert(delivery);
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

        private List<DeliveryModel> GetPage(List<DeliveryModel> list)
        {
            return list.ToList(); //(page * pageSize).Take(pageSize)
        }


        public async Task<DeliveryPageModel> PostFilterData(Dictionary<string, string> keyValuePairs)
        {
            // string IssueDateFrom;

            try
            {


                string itemName = string.Empty;
                var result = new DeliveryPageModel();
                var deliverylist = new List<DeliveryModel>();


                var delivery = await _repo.GetAll().Where(x => x.IsDeleted != true).OrderByDescending(x => x.CreationTime).ToListAsync();

                deliverylist = ObjectMapper.Map<List<DeliveryModel>>(delivery);

                foreach (var property in keyValuePairs)
                {

                    var searchValue = property.Value;
                    switch (property.Key)
                    {

                        case "DateFrom":
                            if (searchValue != "" && searchValue != null)
                            {
                                deliverylist = deliverylist.Where(x => Convert.ToDateTime(x.DeliveryDate) >= Convert.ToDateTime(searchValue)).ToList();
                            }
                            break;
                        case "DateTo":
                            if (searchValue != "" && searchValue != null)
                            {
                                deliverylist = deliverylist.Where(x => Convert.ToDateTime(x.DeliveryDate) <= Convert.ToDateTime(searchValue)).ToList();
                            }
                            break;
                        //case "Keyword":
                        //    if (searchValue != "" && searchValue != null)
                        //    {
                        //        //issuelist = issuelist.Where(x => (x.pName).ToLower() == (searchValue).ToLower() || x.Mrno == searchValue).ToList();
                        //        deliverylist = deliverylist.Where(x => x.Address == Convert.ToString(searchValue)).ToList();
                        //    }
                        //    break;
                        //case "Phone":
                        //    if (searchValue != "" && searchValue != null)
                        //    {
                        //        deliverylist = deliverylist.Where(x => x.DeliveryDate == Convert.ToDateTime(searchValue)).ToList();
                        //    }
                        //    break;



                    }
                }

                result.TotalCount = deliverylist.Count;

                result.DeliveryModel = GetPage(deliverylist);


                return result;

            }
            catch (Exception ex)
            {

                throw ex;
            }


        }

        public async Task<DeliveryModel> GetVendorsById(int Id)
        {
            var entity = await _repo.GetAll().Where(x => x.Id == Id).FirstOrDefaultAsync();

            var result = ObjectMapper.Map<DeliveryModel>(entity);

            return result;
        }

    }
}
