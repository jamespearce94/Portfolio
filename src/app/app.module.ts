import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AuthService} from "./shared/services/auth.service";


export const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    storageBucket: "",
    messagingSenderId: ""
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
    ],
    providers: [
        AuthGuard,
        AuthService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
