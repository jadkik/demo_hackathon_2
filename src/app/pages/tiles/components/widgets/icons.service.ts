import {Injectable} from '@angular/core';

export interface WidgetSet<T> {
    title: string;
    data: T;
}

@Injectable()
export class IconsService {

  icons = {
    basicIcons: ['fa fa-pencil-square-o', 'fa fa-upload', 'fa fa-camera', 'fa fa-comments', 'fa fa-rss-square', 'fa fa-calendar', 'fa fa-share-alt', 'fa fa-user'],
    formIcons: ['fa fa-hourglass-start', 'fa fa-hourglass-end'],
    restrictedIcons: [],
    exclusiveIcons: []
  };

  widgets: WidgetSet<string[]>[] = [];

  getAll() {
    return this.icons;
  }

  getWidgets() {
    this.widgets.push({title:'Basic', data:this.icons.basicIcons});
    this.widgets.push({title:'Form', data:this.icons.formIcons});
    this.widgets.push({title:'Restricted', data:this.icons.restrictedIcons});
    this.widgets.push({title:'Exclusive', data:this.icons.exclusiveIcons});
    return this.widgets;
  }
}
