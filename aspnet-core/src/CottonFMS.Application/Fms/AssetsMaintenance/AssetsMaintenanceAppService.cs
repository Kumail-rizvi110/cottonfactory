using Abp.Domain.Repositories;
using Abp.Domain.Uow;
using Abp.EntityFrameworkCore;
using CottonFMS.EntityFrameworkCore;
using CottonFMS.Fms.AssetsMaintenance.Dto_s;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CottonFMS.Fms.AssetsMaintenance
{
  public  class AssetsMaintenanceAppService : CottonFMSAppServiceBase
    {
        private CottonFMSDbContext _context => _dbContextProvider.GetDbContext();
        private readonly IDbContextProvider<CottonFMSDbContext> _dbContextProvider;
        private IRepository<AssetsMaintenance, long> _repo;
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        public AssetsMaintenanceAppService(
            IRepository<AssetsMaintenance, long> repo
            )
        {
            this._repo = repo;
        }

        private bool Exist(long id)
        {
            return _repo.GetAll().Any(x => x.Id == id);
        }
        public async Task<string> Create(AssetsMaintenanceModel input)
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
                        tem.Cost = input.Cost;
                        tem.MaintenanceDate = input.MaintenanceDate; 
                        tem.Description = input.Description;
                        tem.MaintenanceTime = input.MaintenanceTime;
                        tem.AssetsId = input.AssetsId;


                        //tem.Phone = input.Phone;
                        //tem.email = input.email;
                        //tem.Address = input.Address;

                        _repo.Update(tem);
                        return "2";
                    }



                }

                else
                {
                    AssetsMaintenance assets = new AssetsMaintenance();
                    //sales.Id = input.Id;
                    assets.Cost = input.Cost;
                    assets.Description = input.Description;
                    assets.MaintenanceTime = input.MaintenanceTime;
                    assets.AssetsId = input.AssetsId;

                    //payments.Phone = input.Phone;
                    //payments.email = input.email;
                    //payments.Address = input.Address;

                    _repo.Insert(assets);
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

        private List<AssetsMaintenanceModel> GetPage(List<AssetsMaintenanceModel> list)
        {
            return list.ToList(); //(page * pageSize).Take(pageSize)
        }


        public async Task<AssetsMaintenancePageModel> PostFilterData(Dictionary<string, string> keyValuePairs)
        {
            // string IssueDateFrom;

            try
            {


                string itemName = string.Empty;
                var result = new AssetsMaintenancePageModel();
                var assetslist = new List<AssetsMaintenanceModel>();


                var assets = await _repo.GetAll().Where(x => x.IsDeleted != true).OrderByDescending(x => x.CreationTime).ToListAsync();

                assetslist = ObjectMapper.Map<List<AssetsMaintenanceModel>>(assets);

                foreach (var property in keyValuePairs)
                {

                    var searchValue = property.Value;
                    switch (property.Key)
                    {
                        //case "Keyword":
                        //    if (searchValue != "" && searchValue != null)
                        //    {
                        //        //issuelist = issuelist.Where(x => (x.pName).ToLower() == (searchValue).ToLower() || x.Mrno == searchValue).ToList();
                        //        assetslist = assetslist.Where(x => x.Description == Convert.ToString(searchValue)).ToList();
                        //    }
                        //    break;
                        //case "Phone":
                        //    if (searchValue != "" && searchValue != null)
                        //    {
                        //        assetslist = assetslist.Where(x => x.DateOfBuying == Convert.ToDateTime(searchValue)).ToList();
                        //    }
                        //    break;
                        case "DateFrom":
                            if (searchValue != "" && searchValue != null)
                            {
                                assetslist = assetslist.Where(x => Convert.ToDateTime(x.MaintenanceDate) >= Convert.ToDateTime(searchValue)).ToList();
                            }
                            break;
                        case "DateTo":
                            if (searchValue != "" && searchValue != null)
                            {
                                assetslist = assetslist.Where(x => Convert.ToDateTime(x.MaintenanceDate) <= Convert.ToDateTime(searchValue)).ToList();
                            }
                            break;


                    }
                }

                result.TotalCount = assetslist.Count;

                result.AssetsMaintenanceModel = GetPage(assetslist);


                return result;

            }
            catch (Exception ex)
            {

                throw ex;
            }


        }

        public async Task<AssetsMaintenanceModel> GetAssetsMaintenanceById(int Id)
        {
            var entity = await _repo.GetAll().Where(x => x.Id == Id).FirstOrDefaultAsync();

            var result = ObjectMapper.Map<AssetsMaintenanceModel>(entity);

            return result;
        }

       


    }
}
