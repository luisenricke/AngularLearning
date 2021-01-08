import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalice'
})
export class CapitalicePipe implements PipeTransform {

  transform(value: string, all: boolean = true): string {

    value = value.toLocaleLowerCase();
    let names = value.split(' ');

    // console.log(names);

    if( all ) {
      names = names.map ( name => {
        return name[0].toUpperCase() + name.substr(1);
      });

      // console.log(names);

    } else {
      names[0] = names[0][0].toUpperCase() + names[0].substr(1);
    }

    return names.join(' ');
  }

}
