import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import {AuthService} from "../services/auth.service";


@Injectable()
export class AuthGuard implements CanActivate {


    constructor(private router: Router, private auth:AuthService) { }

    canActivate() {
        if (this.auth.user) {
            console.log('logged in');
            return true;
        }

        this.router.navigate(['/dashboard']);
        return true;
    }
}
