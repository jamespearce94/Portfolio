import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database/database";
import {FirebaseListObservable} from "angularfire2/database/firebase_list_observable";
import {Router} from "@angular/router";
import {routerTransition} from "../../router.animations";

@Component({
    selector: 'app-portfolio-page',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss'],
        animations: [routerTransition()]
})
export class PortfolioComponent implements OnInit {

    projects: FirebaseListObservable<any[]>;
    public searchTerm: string = "";
    public actionTerm: string = "All";

    constructor(af: AngularFireDatabase,private router: Router) {
        this.projects = af.list('Portfolio').map((array) => array.reverse()) as FirebaseListObservable<any[]>;
    }

    ngOnInit() {
    }

    viewproject (key) {
        console.log(key);
        this.router.navigateByUrl('/project/'+ key);
    }

}
