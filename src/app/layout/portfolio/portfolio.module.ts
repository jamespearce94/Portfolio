import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PortfolioComponent} from "./portfolio.component";
import {PortfolioRoutingModule} from "./portfolio-routing.module";
import {FormsModule} from "@angular/forms";
import {ActionTermPipe} from "../../shared/pipes/actionterm-pipe.component";
import {SearchTermPipe} from "../../shared/pipes/searchterm-pipe.component";
import {ReversePipe} from "../../shared/pipes/reverse-pipe.component";


@NgModule({
  imports: [
    CommonModule,
    PortfolioRoutingModule,
      FormsModule
  ],
  declarations: [
    PortfolioComponent,
    SearchTermPipe,
    ActionTermPipe,
    ReversePipe
  ]})

export class PortfolioModule { }
