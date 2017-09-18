import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'search',
        pure: false})
export class InboxPipe implements PipeTransform {
    transform(messages, search) {
        return messages == undefined || search == undefined ? messages : messages.filter((message) => {
                return message.Name.toLowerCase().includes(search.toLowerCase());
            });
    }
} 