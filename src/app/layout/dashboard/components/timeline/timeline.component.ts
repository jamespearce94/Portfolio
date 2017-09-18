import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database/database";
import {FirebaseListObservable} from "angularfire2/database/firebase_list_observable";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  public timeline: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase) {
    this.timeline = af.list('Timeline');
  }

  ngOnInit() {
  }

}
