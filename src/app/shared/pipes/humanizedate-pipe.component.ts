import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'humanize' })
export class HumanizePipe implements PipeTransform {
    constructor() {}
    transform(date) {
        if (!date) {
            return "Pending"
        }
        let diff = moment.unix(date).diff(moment(), 'minutes');
         return moment.duration(diff, 'minutes').humanize();
    }
} 