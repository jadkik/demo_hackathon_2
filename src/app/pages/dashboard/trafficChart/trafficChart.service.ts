import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class TrafficChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }


  getData() {
    let dashboardColors = this._baConfig.get().colors.dashboard;
    return [
      {
        value: 100310,
        color: dashboardColors.white,
        highlight: colorHelper.shade(dashboardColors.white, 15),
        label: 'Grains',
        percentage: 87,
        order: 1,
      }, {
        value: 100090,
        color: dashboardColors.gossip,
        highlight: colorHelper.shade(dashboardColors.gossip, 15),
        label: 'Dairy',
        percentage: 22,
        order: 4,
      }, {
        value: 120085,
        color: dashboardColors.silverTree,
        highlight: colorHelper.shade(dashboardColors.silverTree, 15),
        label: 'Meat',
        percentage: 70,
        order: 3,
      }, {
        value: 113400,
        color: dashboardColors.surfieGreen,
        highlight: colorHelper.shade(dashboardColors.surfieGreen, 15),
        label: 'Chicken',
        percentage: 38,
        order: 2,
      }, {
        value: 69275,
        color: dashboardColors.blueStone,
        highlight: colorHelper.shade(dashboardColors.blueStone, 15),
        label: 'Fruits and Vegetables',
        percentage: 17,
        order: 0,
      },
    ];
  }
}
