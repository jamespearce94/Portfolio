/**
 * Created by James on 19/07/2017.
 */
import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()

export class AuthService {

    user: Observable<firebase.User>;


    constructor(private afAuth: AngularFireAuth) {
        this.user = afAuth.authState;
    }

    login(email:string,password:string) {
        this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }

    logout() {
        this.afAuth.auth.signOut();
    }
}