import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database/database";
import {FirebaseListObservable} from "angularfire2/database/firebase_list_observable";
import {Router} from "@angular/router";
import {FirebaseObjectObservable} from "angularfire2/database/firebase_object_observable";
import {routerTransition} from "../../router.animations";
import {Subject} from "rxjs";

@Component({
    selector: 'app-admin-page',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
    animations: [routerTransition()]
})
export class AdminComponent implements OnInit {

    projects: FirebaseListObservable<any[]>;
    Messages: FirebaseListObservable<any[]>;
    UnreadMessages: FirebaseListObservable<any[]>;
    profile: FirebaseObjectObservable<any>;
    project: FirebaseObjectObservable<any>;
    public sliders: Array<any> = [];
    public FullName: string;
    public Profession: string;
    public Skills: Array<any> = [{value:""},{value:""},{value:""},{value:""},{value:""},{value:""}];

    public iseditingProject: boolean = false;
    public iseditingProfile: boolean = false;
    public isviewingInbox: boolean = false;
    public searchTerm: string = "";
    public actionTerm: string = "All";

    constructor(af: AngularFireDatabase,private router: Router) {
        this.sliders.push({
            imagePath: 'assets/images/slider3.jpg',
            label: 'Admin Dashboard',
            text: 'Racing in the Sheffield varsity hill climb in the peak district in 2016'
        });
        this.projects = af.list('Portfolio');
        this.profile = af.object('Profile/0');
        this.UnreadMessages = af.list('/Messages', {
            query: {
                orderByChild: 'MessageRead',
                equalTo: false
            }
        });
        this.Messages = af.list('/Messages',{
            query: {
                limitToLast: 200
            }
        }).map((array) => array.reverse()) as FirebaseListObservable<any[]>;
    }

    ngOnInit() {
    }

    viewproject (key) {
        console.log(key);
        this.router.navigateByUrl('/project/'+ key);
    }

    updateProfile(){
        if(this.FullName != ""){
            this.profile.update({"FullName": this.FullName});
        }
        if(this.Profession != "") {
            this.profile.update({"Profession": this.Profession});
        }
        if(this.Skills[0].value != "")
        {
            this.profile.update({"Skills/0": this.Skills[0].value})
        }
        if(this.Skills[1].value != "")
        {
            this.profile.update({"Skills/1": this.Skills[1].value})
        }
        if(this.Skills[2].value != "")
        {
            this.profile.update({"Skills/2": this.Skills[2].value})
        }
        if(this.Skills[3].value != "")
        {
            this.profile.update({"Skills/3": this.Skills[3].value})
        }
        if(this.Skills[4].value != "")
        {
            this.profile.update({"Skills/4": this.Skills[4].value})
        }
        if(this.Skills[5].value != "")
        {
            this.profile.update({"Skills/4": this.Skills[5].value})
        }


    }
    editProfile(){
        if(this.iseditingProfile){
            this.iseditingProfile = false;
        }
        else if(!this.iseditingProfile){
            this.iseditingProfile = true;
        }

    }
    viewInbox(){
        if(this.isviewingInbox){
            this.isviewingInbox = false;
        }
        else if(!this.isviewingInbox){
            this.isviewingInbox = true;
        }
    }

    markRead(key){
        debugger;
        this.Messages.update(key, {MessageRead : true});
    }

    markUnread(key){
        this.Messages.update(key, {MessageRead : false});
    }

    reply(message){
        let url = "https://mail.google.com/mail/u/jamespearcedev@gmail.com/#inbox?compose=new";
        window.open(url, "_blank");
    }


}
