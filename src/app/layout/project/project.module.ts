import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SafePipe} from "../../shared/pipes/safeurl-pipe.component";
import {BlankPageRoutingModule} from "./project-routing.module";
import {ProjectComponent} from "./project.component";

@NgModule({
  imports: [
    CommonModule,
    Ng2Charts,
    NgbModule.forRoot(),
    BlankPageRoutingModule
  ],
  declarations: [
    ProjectComponent,
    SafePipe
  ]})
export class ProjectModule { }
