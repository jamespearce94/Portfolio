import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database/database";
import {FirebaseListObservable} from "angularfire2/database/firebase_list_observable";

import {ActivatedRoute, Router} from "@angular/router";
import {FirebaseObjectObservable} from "angularfire2/database/firebase_object_observable";

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

    public project: FirebaseObjectObservable<any>;
    public projects: FirebaseListObservable<any[]>;
    public skills: FirebaseListObservable<any[]>;
    public max;
    public skillslabels: FirebaseListObservable<any[]>
    public radardata: any = [10,20,30,60,70,90];
    public radarlabels: any = ["coding","design","HTML","SASS","WordPress"]
    public params;
    public liveview: Boolean = false;
    public load: Boolean = false;
    public chart: Boolean = false;
    public chartlabel: Boolean = false;

    // Radar
    public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding'];
    public radarChartData: any = [
        { data: [0,50,76,0,100], label: 'Experience' },
    ];
    public radarChartType: string = 'radar';

    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }


    constructor(private af: AngularFireDatabase, private route: ActivatedRoute, private router:Router) {
        this.route.params.subscribe(params => {
            this.params = params['id'];
            console.log(params['id']);
            console.log(this.radarChartData[0].data);
            this.project = af.object('Portfolio/' + this.params.toString() );
            this.projects = af.list('Portfolio');
            this.skills =af.list('Portfolio/' + this.params.toString() + '/Skills/');
            this.skillslabels =af.list('Portfolio/' + this.params.toString() + '/Skills-Labels/');
            this.radardata = this.skills.subscribe(skill => {
                console.log(skill[0].$value);
                let i = 0;
                this.radarChartData[0].data.forEach(value => {
                    this.radarChartData[0].data[i] = skill[i].$value;
                    i++;
                });
                this.chart = true;
            });

            this.radarlabels = this.skillslabels.subscribe(label => {
                let i = 0;
                this.radarChartLabels.forEach(value => {

                    this.radarChartLabels[i] = label[i].$value;
                    i++;
                });
                this.chartlabel = true;
                console.log(this.radarChartLabels)

            });
            this.projects.subscribe(projects => {
                let count = 0;
                this.max = 0;
                projects.forEach(item => {
                    if(item.$key != 0) {
                        count++
                    }
                });
                this.max = count;
            })
        });

    }

    ngOnInit() {

    }

    togglelive() {
        this.liveview = this.liveview == true ? false : true;
    }

    uploadDone=function(){
        this.load = true;
    };

    next (){
        let page = parseInt(this.params) + 1;
        this.router.navigateByUrl('/project/' + page);
    }

    previous (){

        let page = parseInt(this.params) - 1;
        this.router.navigateByUrl('/project/' + page);
    }


}
