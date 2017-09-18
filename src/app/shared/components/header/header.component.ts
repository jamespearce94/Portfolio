import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {AuthService} from "../../services/auth.service";
import {AngularFireDatabase} from "angularfire2/database/database";
import {FirebaseListObservable} from "angularfire2/database/firebase_list_observable";
import * as moment from 'moment';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public Messages : FirebaseListObservable<any[]>;
    public UnreadMessages : FirebaseListObservable<any[]>;


    constructor(public router: Router, public auth: AuthService, public af : AngularFireDatabase) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992) {
                this.toggleSidebar();
            }
            this.Messages = af.list("/Messages",{
                query: {
                    limitToLast: 3
                }
            }).map((array) => array.reverse()) as FirebaseListObservable<any[]>;
            this.UnreadMessages = af.list('/Messages', {
                query: {
                    orderByChild: 'MessageRead',
                    equalTo: false
                }
            });
        });
    }

    ngOnInit() {}

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');
    }

    Logout() {
        this.auth.logout();
    }

    transform(date) {
        if (!date) {
            return "Pending"
        }
        let diff = moment.unix(date).diff(moment(), 'minutes');
        return moment.duration(diff, 'minutes').humanize();
    }
}
