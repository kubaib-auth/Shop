using Abp.Domain.Repositories;
using LessWebStore.Coins;
using LessWebStore.CoinService.Dtos;
using LessWebStore.MultiTenancy.Dto;
using LessWebStore.MultiTenancy;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Extensions;

namespace LessWebStore.CoinService
{
    public class CoinAppService: LessWebStoreAppServiceBase, ICoinAppService
    {
        private readonly IRepository<Coin> _coinRepository;
        public CoinAppService(IRepository<Coin> coinRepository)
        {
            _coinRepository = coinRepository;
        }
        public async Task Create(CoinDto model)
        {
            try
            {
                var coin = new Coin()
                {
                    Name = model.Name,
                    Email = model.Email,
                    IsActive = model.IsActive,
                    CreationTime = model.CreationTime,
                    CreatorUserId = model.CreatorUserId,
                   
                };
                await _coinRepository.InsertAsync(coin);

            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
        public async Task Update(CoinDto model)
        {
            var editcoin = await _coinRepository.FirstOrDefaultAsync(a => a.Id == model.Id);
                editcoin.Name=model.Name;
                editcoin.Email = model.Email;
                editcoin.IsActive=model.IsActive;
                editcoin.CreationTime=model.CreationTime;
                editcoin.CreatorUserId=model.CreatorUserId;
                await _coinRepository.UpdateAsync(editcoin);
        }
        public async Task<List<Coin>> GetAll()
        {
            try
            {
                var datalist = await _coinRepository.GetAll().ToListAsync();
                return datalist;

            }
            catch (Exception ex)
            {
                throw (ex);
            }
        }
          public async Task<Coin> GetByid(int id)
          {
            var coinId = await _coinRepository.FirstOrDefaultAsync(a => a.Id == id);
            return coinId;
          }
       
    }
}
