import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterBreeds: string, propName: string): any[] {
    const result: any = [];
    if(!value || filterBreeds === '' || propName === '') {
      return value;
    }
    value.forEach((a: any) => {
      if(a[propName].trim().toLowerCase().includes(filterBreeds.toLowerCase())) {
        result.push(a);
      }
    });
    return result;
  }

}
