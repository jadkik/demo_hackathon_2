import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsableContentWrapper } from './usable-content-wrapper.component';
import { UsableContentComponent } from './usable-content.component';
import { SelectedContentComponent } from './selected-content.component';

import { UsableContentThumbnail } from './components/usable-content-thumbnail.component';
import { Tile } from './components/tile.component';
import { Tiles } from './components/tiles.component';
import { SelectedTiles } from './components/selected-tiles.component';
import { Events } from './components/events.component';

import { UsableContentStore } from './usableContentStore';
import { UsableContentBackend } from './usableContentBackend.service';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        UsableContentWrapper,
        UsableContentComponent,
        SelectedContentComponent,
        UsableContentThumbnail,
        Tile,
        Tiles,
        SelectedTiles,
        Events
    ],
    declarations: [
        UsableContentWrapper,
        UsableContentComponent,
        SelectedContentComponent,
        UsableContentThumbnail,
        Tile,
        Tiles,
        SelectedTiles,
        Events
    ],
    providers: [
        UsableContentStore,
        UsableContentBackend
    ]
})

export class UsableContentModule { }

