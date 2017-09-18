import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

import {AuthService} from "../shared/services/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    public email : string;
    public password : string;

    constructor(public router: Router, private auth: AuthService) {
    }

    ngOnInit() {
    }

    onLoggedin() {
        this.router.navigate(['/letsonedash']);
    }

    Login() {
        this.auth.login(this.email,this.password);
    }


}
