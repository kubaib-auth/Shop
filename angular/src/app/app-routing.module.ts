import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRouteGuard } from '@shared/auth/auth-route-guard';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { TenantsComponent } from './tenants/tenants.component';
import { RolesComponent } from 'app/roles/roles.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import{ StudentComponent} from './students/student.component';
import { CreateStudenttComponent } from './students/create-studentt/create-studentt.component';
import { EditStudentComponent } from './students/edit-student/edit-student.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CreateCourseComponent} from './courses/create-course/create-course.component';
import { EditCourseComponent } from './courses/edit-course/edit-course.component';
import { AsignCourseForStudentComponent } from './asigncourse/asign-course-for-student/asign-course-for-student.component';
import { StudentcourseListComponent } from './asigncourse/studentcourse-list/studentcourse-list.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { CreatebookComponent } from './books/createbook/createbook.component';
import { EditbookComponent } from './books/editbook/editbook.component';
import { CoinComponent } from './coin/coin.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from '../shop/shop/dashboard/dashboard.component';
import { CategoryProductComponent } from './categoryProduct/category-product.component';
@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AppComponent,
                children: [

                    { path: 'dashboard', component:DashboardComponent,  canActivate: [AppRouteGuard] },
                    { path: 'categoryProduct', component:CategoryProductComponent,  canActivate: [AppRouteGuard] },

                    { path: 'home', component: HomeComponent,  canActivate: [AppRouteGuard] },
                    { path: 'coin', component: CoinComponent,  canActivate: [AppRouteGuard] },

                    { path: 'product', component:ProductComponent,  canActivate: [AppRouteGuard] },
                    { path: 'category', component:CategoryComponent,  canActivate: [AppRouteGuard] },

                    { path: 'users', component: UsersComponent, data: { permission: 'Pages.Users' }, canActivate: [AppRouteGuard] },
                    { path: 'book-list', component: BookListComponent,  canActivate: [AppRouteGuard] },
                    { path: 'createbook', component:CreatebookComponent,  canActivate: [AppRouteGuard] },
                    { path: 'edit/:id', component:EditbookComponent,  canActivate: [AppRouteGuard] },
                    { path: 'students', component: StudentComponent, data: { permission: '' }, canActivate: [AppRouteGuard] },
                    { path: 'create-student', component:CreateStudenttComponent,canActivate: [AppRouteGuard]  },
                    { path: 'edit/:id', component:EditStudentComponent,canActivate: [AppRouteGuard] },
                    { path: 'edit-course/:id', component:EditCourseComponent,canActivate: [AppRouteGuard] },
                    { path: 'courses', component:CourseListComponent,canActivate: [AppRouteGuard]},
                    { path: 'create-course', component:CreateCourseComponent,canActivate: [AppRouteGuard]},
                    { path: 'asign-course',component:AsignCourseForStudentComponent,canActivate: [AppRouteGuard]},
                    { path: 'asign-course-List',component:StudentcourseListComponent,canActivate: [AppRouteGuard]},

                    { path: 'roles', component: RolesComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
                    { path: 'tenants', component: TenantsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'about', component: AboutComponent, canActivate: [AppRouteGuard] },
                    { path: 'update-password', component: ChangePasswordComponent, canActivate: [AppRouteGuard] }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
