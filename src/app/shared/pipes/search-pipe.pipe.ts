import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(items: any[], searchTerm: string): any[] {
    if(searchTerm==""){
      return items;
    }else{

      searchTerm=searchTerm.toLowerCase();
      return items.filter(item =>
        JSON.stringify(item).toLowerCase().includes(searchTerm)
      );
     
    }
  }

}
