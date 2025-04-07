import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  transform(value: string, filter: string): unknown {
    let result = '';
    let lowercasevalue = value.toLowerCase();
    if (filter && value.includes(filter)) {
      const index = value.indexOf(filter);
      result += value.substring(0, index);
      result += '<strong>' + filter + '</strong>';
      result += value.substring(index + filter.length);
    }
    return result;
  }

  //fixed code solution

  // transform(value: string, filter: string): unknown {
  //   let result = '';
  //   let lowercasevalue = value.toLowerCase();
  //   if (filter && lowercasevalue.includes(filter.toLowerCase() ?? '')) {
  //     const index = lowercasevalue.indexOf(filter.toLowerCase() ?? '');
  //     result += value.substring(0, index);
  //     result +=
  //       '<strong>' +
  //       value.substring(index, index + filter.length) +
  //       '</strong>';
  //     result += value.substring(index + filter.length);
  //   }
  //   return result.trim() == '' ? value : result;
  // }
}
