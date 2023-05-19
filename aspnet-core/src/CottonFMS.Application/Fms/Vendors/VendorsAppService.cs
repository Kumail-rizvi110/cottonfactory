using Abp.Domain.Repositories;
using Abp.Domain.Uow;
using Abp.EntityFrameworkCore;
using CottonFMS.EntityFrameworkCore;
using CottonFMS.Fms;
using CottonFMS.Fms.Vendors;
using CottonFMS.Fms.Vendors.DTO_s;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace CottonFMS.Fms.Vendors
{
    public class VendorsAppService : CottonFMSAppServiceBase
    {
        private CottonFMSDbContext _context => _dbContextProvider.GetDbContext();
        private readonly IDbContextProvider<CottonFMSDbContext> _dbContextProvider;
        private IRepository<Vendors, long> _repo;
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        public VendorsAppService(
            IRepository<Vendors, long> repo
            )
        {
            this._repo = repo;
        }

        private bool Exist(long id)
        {
            return _repo.GetAll().Any(x => x.Id == id);
        }
        public async Task<string> Create(VendorsModel input)
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
                        tem.Phone = input.Phone;
                        tem.email = input.email;
                        tem.Address = input.Address;

                        _repo.Update(tem);
                        return "2";
                    }



                }

                else
                {
                    Vendors vendors = new Vendors();
                    //sales.Id = input.Id;
                    vendors.FirstName = input.FirstName;
                    vendors.LastName = input.LastName;
                    vendors.Phone = input.Phone;
                    vendors.email = input.email;
                    vendors.Address = input.Address;

                    _repo.Insert(vendors);
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

        private List<VendorsModel> GetPage(List<VendorsModel> list)
        {
            return list.ToList(); //(page * pageSize).Take(pageSize)
        }


        public async Task<VendorsPageModel> PostFilterData(Dictionary<string, string> keyValuePairs)
        {
            // string IssueDateFrom;

            try
            {


                string itemName = string.Empty;
                var result = new VendorsPageModel();
                var vendorlist = new List<VendorsModel>();
               
              
                var vendor = await _repo.GetAll().Where(x => x.IsDeleted != true).OrderByDescending(x => x.CreationTime).ToListAsync();

                vendorlist = ObjectMapper.Map<List<VendorsModel>>(vendor);

                foreach (var property in keyValuePairs)
                {

                    var searchValue = property.Value;
                    switch (property.Key)
                    {
                        case "Keyword":
                            if (searchValue != "" && searchValue != null)
                            {
                                //issuelist = issuelist.Where(x => (x.pName).ToLower() == (searchValue).ToLower() || x.Mrno == searchValue).ToList();
                                vendorlist = vendorlist.Where(x => x.FirstName == Convert.ToString(searchValue)).ToList();
                            }
                            break;
                        case "Keyword1":
                            if (searchValue != "" && searchValue != null)
                            {
                                vendorlist = vendorlist.Where(x => x.Phone == Convert.ToInt32(searchValue)).ToList();
                            }
                            break;
                        //case "DateFrom":
                        //    if (searchValue != "" && searchValue != null)
                        //    {
                        //        vendorlist = vendorlist.Where(x => Convert.ToDateTime(x.Date) >= Convert.ToDateTime(searchValue)).ToList();
                        //    }
                        //    break;
                        //case "DateTo":
                        //    if (searchValue != "" && searchValue != null)
                        //    {
                        //        vendorlist = vendorlist.Where(x => Convert.ToDateTime(x.Date) <= Convert.ToDateTime(searchValue)).ToList();
                        //    }
                        //    break;



                    }
                }

                result.TotalCount = vendorlist.Count;

                result.VendorsModel = GetPage(vendorlist);


                return result;

            }
            catch (Exception ex)
            {

                throw ex;
            }


        }

        public async Task<VendorsModel> GetVendorsById(int Id)
        {
            var entity = await _repo.GetAll().Where(x => x.Id == Id).FirstOrDefaultAsync();

            var result = ObjectMapper.Map<VendorsModel>(entity);

            return result;
        }

    }
}
