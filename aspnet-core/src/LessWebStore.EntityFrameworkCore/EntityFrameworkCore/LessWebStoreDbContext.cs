using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using LessWebStore.Authorization.Roles;
using LessWebStore.Authorization.Users;
using LessWebStore.MultiTenancy;
using LessWebStore.StudentCourse;
using LessWebStore.Books;
using LessWebStore.Coins;
using LessWebStore.Orders;
using LessWebStore.Products;
using LessWebStore.ProductOrderDetails;
using LessWebStore.Categorys;

namespace LessWebStore.EntityFrameworkCore
{
    public class LessWebStoreDbContext : AbpZeroDbContext<Tenant, Role, User, LessWebStoreDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public DbSet<Student> Students { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<StudenttCourse> StudenttCourses { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<Coin> Coins { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categorys { get; set; }
        
        public DbSet<OrderDetail> OrderDetails { get; set; }
        public DbSet<Order> Orders { get; set; }
        public LessWebStoreDbContext(DbContextOptions<LessWebStoreDbContext> options)
            : base(options)
        {
        }
    }
}
