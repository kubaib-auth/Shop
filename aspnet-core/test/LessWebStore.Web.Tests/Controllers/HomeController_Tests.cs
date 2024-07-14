using System.Threading.Tasks;
using LessWebStore.Models.TokenAuth;
using LessWebStore.Web.Controllers;
using Shouldly;
using Xunit;

namespace LessWebStore.Web.Tests.Controllers
{
    public class HomeController_Tests: LessWebStoreWebTestBase
    {
        [Fact]
        public async Task Index_Test()
        {
            await AuthenticateAsync(null, new AuthenticateModel
            {
                UserNameOrEmailAddress = "admin",
                Password = "123qwe"
            });

            //Act
            var response = await GetResponseAsStringAsync(
                GetUrl<HomeController>(nameof(HomeController.Index))
            );

            //Assert
            response.ShouldNotBeNullOrEmpty();
        }
    }
}