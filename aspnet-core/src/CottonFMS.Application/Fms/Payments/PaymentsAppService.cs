using Abp.Domain.Repositories;
using Abp.Domain.Uow;
using Abp.EntityFrameworkCore;
using CottonFMS.EntityFrameworkCore;
using CottonFMS.Fms.Payments.DTO_s;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CottonFMS.Fms.Payments
{
  public class PaymentsAppService : CottonFMSAppServiceBase
    {
        private CottonFMSDbContext _context => _dbContextProvider.GetDbContext();
        private readonly IDbContextProvider<CottonFMSDbContext> _dbContextProvider;
        private IRepository<Payments, long> _repo;
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        public PaymentsAppService(
            IRepository<Payments, long> repo
            )
        {
            this._repo = repo;
        }

        private bool Exist(long id)
        {
            return _repo.GetAll().Any(x => x.Id == id);
        }
        public async Task<string> Create(PaymentsModel input)
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
                        tem.Amount = input.Amount;
                        tem.PaymentDate = input.PaymentDate;
                        tem.CustomersId = input.CustomersId;
                        tem.OrdersId = input.OrdersId;
                        //tem.Phone = input.Phone;
                        //tem.email = input.email;
                        //tem.Address = input.Address;

                        _repo.Update(tem);
                        return "Updte Successfully";
                    }



                }

                else
                {
                    Payments payments = new Payments();
                    //sales.Id = input.Id;
                    payments.Amount = input.Amount;
                    payments.PaymentDate = input.PaymentDate;
                    //payments.Phone = input.Phone;
                    //payments.email = input.email;
                    //payments.Address = input.Address;

                    _repo.Insert(payments);
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

        private List<PaymentsModel> GetPage(List<PaymentsModel> list)
        {
            return list.ToList(); //(page * pageSize).Take(pageSize)
        }


        public async Task<PaymentsPageModel> PostFilterData(Dictionary<string, string> keyValuePairs)
        {
            // string IssueDateFrom;

            try
            {


                string itemName = string.Empty;
                var result = new PaymentsPageModel();
                var paymentslist = new List<PaymentsModel>();


                var payments = await _repo.GetAll().Where(x => x.IsDeleted != true).OrderByDescending(x => x.CreationTime).ToListAsync();

                paymentslist = ObjectMapper.Map<List<PaymentsModel>>(payments);

                foreach (var property in keyValuePairs)
                {

                    var searchValue = property.Value;
                    switch (property.Key)
                    {
                        case "Keyword":
                            if (searchValue != "" && searchValue != null)
                            {
                                //issuelist = issuelist.Where(x => (x.pName).ToLower() == (searchValue).ToLower() || x.Mrno == searchValue).ToList();
                                paymentslist = paymentslist.Where(x => x.Amount == Convert.ToInt32(searchValue)).ToList();
                            }
                            break;
                        //case "Phone":
                        //    if (searchValue != "" && searchValue != null)
                        //    {
                        //        paymentslist = paymentslist.Where(x => x.PaymentDate == Convert.ToDateTime(searchValue)).ToList();
                        //    }
                        //    break;



                    }
                }

                result.TotalCount = paymentslist.Count;

                result.PaymentsModel = GetPage(paymentslist);


                return result;

            }
            catch (Exception ex)
            {

                throw ex;
            }


        }

        public async Task<PaymentsModel> GetVendorsById(int Id)
        {
            var entity = await _repo.GetAll().Where(x => x.Id == Id).FirstOrDefaultAsync();

            var result = ObjectMapper.Map<PaymentsModel>(entity);

            return result;
        }

    }
}
