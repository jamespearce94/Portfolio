import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {AngularFireDatabase} from "angularfire2/database/database";
import {FirebaseObjectObservable} from "angularfire2/database/firebase_object_observable";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})

export class DashboardComponent implements OnInit {
    public sliders: Array<any> = [];
    public profile: FirebaseObjectObservable<any>;

    constructor(af: AngularFireDatabase) {

        this.sliders.push({
            imagePath: 'assets/images/slider1.jpg',
            label: 'Hallam Cycling',
            text: 'Racing in the Sheffield varsity hill climb in the peak district in 2016'
        }, {
            imagePath: 'assets/images/slider2.jpg',
            label: 'Shotokan Karate',
            text: 'I successfully achieved my second dan black belt in 2015 '
        },);

        this.profile = af.object('Profile/0');

    }

    ngOnInit() {
    }
}
