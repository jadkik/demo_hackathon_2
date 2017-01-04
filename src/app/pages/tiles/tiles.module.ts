import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Tiles } from './tiles.component';
import { routing }       from './tiles.routing';

import { Widgets } from './components/widgets/widgets.component';
import { Themes } from './components/themes/themes.component';
import { IconsService } from './components/widgets/icons.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Widgets,
    Themes,
    Tiles
  ],
  providers: [
    IconsService
  ]
})
export default class TilesModule {}
