import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../../shared';
import {HumanizePipe} from "../../shared/pipes/humanizedate-pipe.component";


@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
        StatModule
    ],
    declarations: [
        DashboardComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent,
        HumanizePipe
    ]
})
export class DashboardModule { }
