import { Injectable } from '@angular/core';
import { PermissionCheckerService } from 'abp-ng2-module';
import { AppSessionService } from '../session/app-session.service';

import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild
} from '@angular/router';

@Injectable()
export class AppRouteGuard implements CanActivate, CanActivateChild {

    constructor(
        private _permissionChecker: PermissionCheckerService,
        private _router: Router,
        private _sessionService: AppSessionService,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        debugger
        if (!this._sessionService.user) {
            debugger
           // this._router.navigate(['/account/login']);
            this._router.navigate(['/shop/dashboard']);
            return false;
        }

        if (!route.data || !route.data['permission']) {
            return true;
        }

        if (this._permissionChecker.isGranted(route.data['permission'])) {
            return true;
        }

        this._router.navigate([this.selectBestRoute()]);
        return false;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    selectBestRoute(): string {
        debugger
        if (!this._sessionService.user) {
        return '/account/login';
         // return '/shop/shop/dashboard'
        }

        if (this._permissionChecker.isGranted('Pages.Users')) {
            return '/app/admin/users';
        }

        return '/shop/dashboard';
    }
}
