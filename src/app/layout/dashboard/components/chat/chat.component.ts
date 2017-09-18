import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database/database";
import {FirebaseListObservable} from "angularfire2/database/firebase_list_observable";

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
    public recent : FirebaseListObservable<any[]>
    constructor(public af: AngularFireDatabase) {
        this.recent = af.list('Portfolio',{
            query: {
                limitToLast: 3
            }
        }).map((array) => array.reverse()) as FirebaseListObservable<any[]>;
    }
    ngOnInit() { }
}
