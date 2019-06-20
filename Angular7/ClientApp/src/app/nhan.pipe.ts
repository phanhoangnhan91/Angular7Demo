import {
    Pipe, PipeTransform
} from '@angular/core';
import {
    UpperCasePipe
} from '@angular/common';

@Pipe({
  name: 'nhan'
})
export class NhanPipe implements PipeTransform {
    constructor() {
    }
    transform(value: any, args?: any): any {
        return (new UpperCasePipe()).transform(value) + "123";
        return value + "123";
  }

}
