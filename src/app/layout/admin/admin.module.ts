import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {AdminRoutingModule} from "./admin-routing.module";
import {AdminComponent} from "./admin.component";
import { StatModule } from '../../shared';
import {NgbCarouselModule, NgbAlertModule} from "@ng-bootstrap/ng-bootstrap";
import {LimitStringPipe} from "../../shared/pipes/limitstring-pipe.component";
import {InboxPipe} from "../../shared/pipes/inbox-pipe.component";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
      FormsModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
      StatModule
  ],
  declarations: [
    AdminComponent,
    LimitStringPipe,
  InboxPipe
  ]
})

export class AdminModule { }
