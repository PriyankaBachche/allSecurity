import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

import { RouterLink, RouterOutlet } from '@angular/router';
import { FilterPipe } from './pipes/filter.pipe';
import { SearchPipePipe } from './pipes/search-pipe.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    FilterPipe,
    SearchPipePipe,

  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet
  ],
  exports:[
    FilterPipe,HeaderComponent,SearchPipePipe
  ]
})
export class SharedModule { }
