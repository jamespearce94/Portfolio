import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'action',
        pure: false})
export class ActionTermPipe implements PipeTransform {
    transform(projects, search) {

        return projects == undefined || search == undefined || search == "All" ? projects : projects.filter((project) => {
                return project.Action.includes(search);
            });
    }
} 