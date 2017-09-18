import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'term',
        pure: false})
export class SearchTermPipe implements PipeTransform {
    transform(projects, search) {
        return projects == undefined || search == undefined ? projects : projects.filter((project) => {
                return project.Title.toLowerCase().includes(search.toLowerCase());
            });
    }
} 