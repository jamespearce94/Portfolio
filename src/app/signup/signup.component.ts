import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import {AuthService} from "../shared/services/auth.service";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

    constructor(private auth: AuthService) { }

    ngOnInit() { }

    signup (firstName,surname,email,password){

}
}
