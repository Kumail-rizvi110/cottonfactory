using Abp.Domain.Repositories;
using Abp.Domain.Uow;
using Abp.EntityFrameworkCore;
using CottonFMS.EntityFrameworkCore;
using CottonFMS.Fms.Assets.DTO_s;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CottonFMS.Fms.Assets
{
  public  class AssetsAppService : CottonFMSAppServiceBase
    {
        private CottonFMSDbContext _context => _dbContextProvider.GetDbContext();
        private readonly IDbContextProvider<CottonFMSDbContext> _dbContextProvider;
        private IRepository<Assets, long> _repo;
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        public AssetsAppService(
            IRepository<Assets, long> repo
            )
        {
            this._repo = repo;
        }

        private bool Exist(long id)
        {
            return _repo.GetAll().Any(x => x.Id == id);
        }
        public async Task<string> Create(AssetsModel input)
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
                        tem.Cost = input.Cost;
                        tem.DateOfBuying = input.DateOfBuying;

                        //tem.Phone = input.Phone;
                        //tem.email = input.email;
                        //tem.Address = input.Address;

                        _repo.Update(tem);
                        return "Updte Successfully";
                    }



                }

                else
                {
                    Assets assets = new Assets();
                    //sales.Id = input.Id;
                    assets.FirstName = input.FirstName;
                    assets.Cost = input.Cost;
                    assets.DateOfBuying = input.DateOfBuying;

                    //payments.Phone = input.Phone;
                    //payments.email = input.email;
                    //payments.Address = input.Address;

                    _repo.Insert(assets);
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

        private List<AssetsModel> GetPage(List<AssetsModel> list)
        {
            return list.ToList(); //(page * pageSize).Take(pageSize)
        }


        public async Task<AssetsPageModel> PostFilterData(Dictionary<string, string> keyValuePairs)
        {
            // string IssueDateFrom;

            try
            {


                string itemName = string.Empty;
                var result = new AssetsPageModel();
                var assetslist = new List<AssetsModel>();


                var assets = await _repo.GetAll().Where(x => x.IsDeleted != true).OrderByDescending(x => x.CreationTime).ToListAsync();

                assetslist = ObjectMapper.Map<List<AssetsModel>>(assets);

                foreach (var property in keyValuePairs)
                {

                    var searchValue = property.Value;
                    switch (property.Key)
                    {
                        case "Keyword":
                            if (searchValue != "" && searchValue != null)
                            {
                                //issuelist = issuelist.Where(x => (x.pName).ToLower() == (searchValue).ToLower() || x.Mrno == searchValue).ToList();
                                assetslist = assetslist.Where(x => x.FirstName == Convert.ToString(searchValue)).ToList();
                            }
                            break;
                        case "Phone":
                            if (searchValue != "" && searchValue != null)
                            {
                                assetslist = assetslist.Where(x => x.DateOfBuying == Convert.ToDateTime(searchValue)).ToList();
                            }
                            break;



                    }
                }

                result.TotalCount = assetslist.Count;

                result.AssetsModel = GetPage(assetslist);


                return result;

            }
            catch (Exception ex)
            {

                throw ex;
            }


        }

        public async Task<AssetsModel> GetVendorsById(int Id)
        {
            var entity = await _repo.GetAll().Where(x => x.Id == Id).FirstOrDefaultAsync();

            var result = ObjectMapper.Map<AssetsModel>(entity);

            return result;
        }

    }
}
