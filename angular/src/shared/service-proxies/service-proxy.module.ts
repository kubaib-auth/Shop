import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AbpHttpInterceptor } from 'abp-ng2-module';

import * as ApiServiceProxies from './service-proxies';

@NgModule({
    providers: [
        ApiServiceProxies.OrderServiceProxy,
        ApiServiceProxies.OrderDetailServiceProxy,
        ApiServiceProxies.ProductAppServicesServiceProxy,
        ApiServiceProxies.CategoryAppServicesServiceProxy,
        ApiServiceProxies.CoinServiceProxy,
        ApiServiceProxies.BookServiceProxy,
        ApiServiceProxies.CourseServiceProxy,
        ApiServiceProxies.StudentCourseServiceProxy,
        ApiServiceProxies.StudentServiceProxy,
        ApiServiceProxies.RoleServiceProxy,
        ApiServiceProxies.SessionServiceProxy,
        ApiServiceProxies.TenantServiceProxy,
        ApiServiceProxies.UserServiceProxy,
        ApiServiceProxies.TokenAuthServiceProxy,
        ApiServiceProxies.AccountServiceProxy,
        ApiServiceProxies.ConfigurationServiceProxy,
        { provide: HTTP_INTERCEPTORS, useClass: AbpHttpInterceptor, multi: true }
    ]
})
export class ServiceProxyModule { }
