﻿using Abp.Domain.Repositories;
using Abp.Domain.Uow;
using Abp.EntityFrameworkCore;
using CottonFMS.EntityFrameworkCore;
using CottonFMS.Fms.Purchase.DTO_s;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CottonFMS.Fms.Purchase
{
    public class PurchaseAppService : CottonFMSAppServiceBase
    {
        private CottonFMSDbContext _context => _dbContextProvider.GetDbContext();
        private readonly IDbContextProvider<CottonFMSDbContext> _dbContextProvider;
        private IRepository<Purchase, long> _repo;
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        public PurchaseAppService(
            IRepository<Purchase, long> repo
            )
        {
            this._repo = repo;
        }

        private bool Exist(long id)
        {
            return _repo.GetAll().Any(x => x.Id == id);
        }
        public async Task<string> Create(PurchaseModel input)
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
                        tem.amount = input.amount;
                        tem.PurchaseDate = input.PurchaseDate;
                        tem.VendorsId = input.VendorsId;
                        tem.CottonFiberPurchasedId = input.CottonFiberPurchasedId;

                        tem.Name = input.Name;
                        tem.Description = input.Description;
                        tem.Quality = input.Quality;
                        tem.Quantity = input.Quantity;


                        //tem.Phone = input.Phone;
                        //tem.email = input.email;
                        //tem.Address = input.Address;

                        _repo.Update(tem);
                        return "2";
                    }



                }

                else
                {
                    Purchase purchase = new Purchase();
                    //sales.Id = input.Id;
                    purchase.amount = input.amount;
                    purchase.PurchaseDate = input.PurchaseDate;
                    purchase.VendorsId = input.VendorsId;
                    purchase.CottonFiberPurchasedId = input.CottonFiberPurchasedId;

                    purchase.Name = input.Name;
                    purchase.Description = input.Description;
                    purchase.Quality = input.Quality;
                    purchase.Quantity = input.Quantity;
                    //payments.Phone = input.Phone;
                    //payments.email = input.email;
                    //payments.Address = input.Address;

                    _repo.Insert(purchase);
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

        private List<PurchaseModel> GetPage(List<PurchaseModel> list)
        {
            return list.ToList(); //(page * pageSize).Take(pageSize)
        }


        public async Task<PurchasePageModel> PostFilterData(Dictionary<string, string> keyValuePairs)
        {
            // string IssueDateFrom;

            try
            {


                string itemName = string.Empty;
                var result = new PurchasePageModel();
                var purchaselist = new List<PurchaseModel>();


                var purchase = await _repo.GetAll().Where(x => x.IsDeleted != true).OrderByDescending(x => x.CreationTime).ToListAsync();

                purchaselist = ObjectMapper.Map<List<PurchaseModel>>(purchase);

                foreach (var property in keyValuePairs)
                {

                    var searchValue = property.Value;
                    switch (property.Key)
                    {
                        
                        case "DateFrom":
                            if (searchValue != "" && searchValue != null)
                            {
                                purchaselist = purchaselist.Where(x => Convert.ToDateTime(x.PurchaseDate) >= Convert.ToDateTime(searchValue)).ToList();
                            }
                            break;
                        case "DateTo":
                            if (searchValue != "" && searchValue != null)
                            {
                                purchaselist = purchaselist.Where(x => Convert.ToDateTime(x.PurchaseDate) <= Convert.ToDateTime(searchValue)).ToList();
                            }
                            break;
                        case "Name":
                            if (searchValue != "" && searchValue != null)
                            {
                                //issuelist = issuelist.Where(x => (x.pName).ToLower() == (searchValue).ToLower() || x.Mrno == searchValue).ToList();
                                purchaselist = purchaselist.Where(x => x.Name == Convert.ToString(searchValue)).ToList();
                            }
                            break;

                            //case "Phone":
                            //    if (searchValue != "" && searchValue != null)
                            //    {
                            //        purchaselist = purchaselist.Where(x => x.PurchaseDate == Convert.ToDateTime(searchValue)).ToList();
                            //    }
                            //    break;



                    }
                }

                result.TotalCount = purchaselist.Count;

                result.PurchaseModel = GetPage(purchaselist);


                return result;

            }
            catch (Exception ex)
            {

                throw ex;
            }


        }

        public async Task<PurchaseModel> GetPurchaseById(int Id)
        {
            var entity = await _repo.GetAll().Where(x => x.Id == Id).FirstOrDefaultAsync();

            var result = ObjectMapper.Map<PurchaseModel>(entity);

            return result;
        }

    }
}
