import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {

  }
  transform(value: any, args?: any): any {
    return this.sanitizer.bypassSecurityTrustHtml(value + '&#8451;');
  }

}
