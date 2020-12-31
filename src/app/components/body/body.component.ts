import { Component } from '@angular/core';


@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

    status: boolean = true;

    quote: any = {
        message: 'I know for sure that what we well on is who we become',
        author: 'Oprah Winfrey'
    }

    avengers: string[] = ['Spiderman', 'Thor', 'Hulk', 'Black Panter'];


}
