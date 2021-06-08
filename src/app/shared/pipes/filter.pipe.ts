import { Pipe, PipeTransform } from '@angular/core';
import { IBusinessModel } from '../models/ibusiness.model';

@Pipe({name: 'filter' })
export class Filter implements PipeTransform {
    transform(items: IBusinessModel[], searchText: string): any[] {
        searchText = searchText.trim().toLowerCase();
        if (searchText) {
            return items.filter(photo => photo.name?.toLowerCase().includes(searchText));
        } else{
            return items;
        }

    }
}
