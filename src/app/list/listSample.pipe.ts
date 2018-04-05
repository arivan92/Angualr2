import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'listSample'
})

export class ListSamplePipe implements PipeTransform{
    transform(value: string){
        return value + 'Summa';
    }
}