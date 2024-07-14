import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from '@app/home/home.component';
import { AboutComponent } from '@app/about/about.component';
// tenants
import { TenantsComponent } from '@app/tenants/tenants.component';
import { CreateTenantDialogComponent } from './tenants/create-tenant/create-tenant-dialog.component';
import { EditTenantDialogComponent } from './tenants/edit-tenant/edit-tenant-dialog.component';
// roles
import { RolesComponent } from '@app/roles/roles.component';
import { CreateRoleDialogComponent } from './roles/create-role/create-role-dialog.component';
import { EditRoleDialogComponent } from './roles/edit-role/edit-role-dialog.component';
// users
import { UsersComponent } from '@app/users/users.component';
import { CreateUserDialogComponent } from '@app/users/create-user/create-user-dialog.component';
import { EditUserDialogComponent } from '@app/users/edit-user/edit-user-dialog.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import { ResetPasswordDialogComponent } from './users/reset-password/reset-password.component';
//student

// layout
import { HeaderComponent } from './layout/header.component';
import { HeaderLeftNavbarComponent } from './layout/header-left-navbar.component';
import { HeaderLanguageMenuComponent } from './layout/header-language-menu.component';
import { HeaderUserMenuComponent } from './layout/header-user-menu.component';
import { FooterComponent } from './layout/footer.component';
import { SidebarComponent } from './layout/sidebar.component';
import { SidebarLogoComponent } from './layout/sidebar-logo.component';
import { SidebarUserPanelComponent } from './layout/sidebar-user-panel.component';
import { SidebarMenuComponent } from './layout/sidebar-menu.component';

import{ StudentComponent} from './students/student.component';

import {CreateStudenttComponent} from './students/create-studentt/create-studentt.component';
import { EditStudentComponent } from './students/edit-student/edit-student.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CreateCourseComponent } from './courses/create-course/create-course.component';
import { EditCourseComponent } from './courses/edit-course/edit-course.component';
import { AsignCourseForStudentComponent } from './asigncourse/asign-course-for-student/asign-course-for-student.component';
import { StudentcourseListComponent } from './asigncourse/studentcourse-list/studentcourse-list.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { CreatebookComponent } from './books/createbook/createbook.component';

import { EditbookComponent } from './books/editbook/editbook.component';
import { CoinComponent } from './coin/coin.component';
import { CreatCoinComponent } from './coin/creat-coin.component';
import { EditCoinComponent } from './coin/edit-coin.component';
import { TableModule } from 'primeng/table';
import {ProductComponent} from './product/product.component';
import { CreateOrEditproductComponent } from './product/create-or-editproduct.component';
import { CategoryComponent } from './category/category.component';
import { CreateOrEditCategoryModelComponent } from './category/create-or-edit-category-model.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { EditorModule } from 'primeng/editor';
import { CategoryProductComponent } from './categoryProduct/category-product.component';
import { ProductDataService } from 'shop/shop/product-data.service';
import {RadioButtonModule} from 'primeng/radiobutton';

//import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        // tenants
        TenantsComponent,
        CreateTenantDialogComponent,
        EditTenantDialogComponent,
        // roles
        RolesComponent,
        CreateRoleDialogComponent,
        EditRoleDialogComponent,
        // users
        UsersComponent,
        CreateUserDialogComponent,
        EditUserDialogComponent,
        ChangePasswordComponent,
        ResetPasswordDialogComponent,
        //students
       
        // layout
        HeaderComponent,
        HeaderLeftNavbarComponent,
        HeaderLanguageMenuComponent,
        HeaderUserMenuComponent,
        FooterComponent,
        SidebarComponent,
        SidebarLogoComponent,
        SidebarUserPanelComponent,
        SidebarMenuComponent,
        StudentComponent,
        CreateStudenttComponent,
        EditStudentComponent,
        CourseListComponent,
        CreateCourseComponent,
        EditCourseComponent,
        AsignCourseForStudentComponent,
        StudentcourseListComponent,
        BookListComponent,
        CreatebookComponent,      
        EditbookComponent,
                CoinComponent,
                CreatCoinComponent,
                EditCoinComponent,
                ProductComponent,
                CreateOrEditproductComponent,
                CategoryComponent,
                CreateOrEditCategoryModelComponent,
                CategoryProductComponent,
                //DashboardComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
     
        HttpClientModule,
        HttpClientJsonpModule,
        ModalModule.forChild(),
        BsDropdownModule,
        CollapseModule,
        TabsModule,
        AppRoutingModule,
        ServiceProxyModule,
        SharedModule,
        NgxPaginationModule,
        TableModule,
        DropdownModule,
        InputTextareaModule,
        EditorModule,
        RadioButtonModule,
    ],
    providers: [
        ProductDataService
    ]
})
export class AppModule {}
