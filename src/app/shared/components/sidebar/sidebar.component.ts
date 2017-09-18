import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {AngularFireDatabase} from "angularfire2/database/database";
import {FirebaseObjectObservable} from "angularfire2/database/firebase_object_observable";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    public profile: FirebaseObjectObservable<any>;

    constructor(public af: AngularFireDatabase,  public auth: AuthService){
            this.profile = af.object('Profile/0');
    }

    Logout() {
        this.auth.logout();
    }
}
