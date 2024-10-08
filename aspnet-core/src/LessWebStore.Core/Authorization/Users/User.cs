﻿using System;
using System.Collections.Generic;
using Abp.Authorization.Users;
using Abp.Extensions;

namespace LessWebStore.Authorization.Users
{
    public class User : AbpUser<User>
    {
        public const string DefaultPassword = "654lmn";

        public static string CreateRandomPassword()
        {
            return Guid.NewGuid().ToString("N").Truncate(16);
        }

        public static User CreateTenantAdminUser(int tenantId, string emailAddress)
        {
            var user = new User
            {
                TenantId = tenantId,
                UserName = AdminUserName,
                Name = AdminUserName,
                Surname = AdminUserName,
                EmailAddress = emailAddress,
                Roles = new List<UserRole>()
            };

            user.SetNormalizedNames();

            return user;
        }
    }
}
