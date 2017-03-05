import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper, layoutPaths} from '../../../theme';

@Injectable()
export class LineChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {

    var layoutColors = this._baConfig.get().colors;
    var graphColor = this._baConfig.get().colors.custom.dashboardLineChart;

    return {
      type: 'serial',
      theme: 'blur',
      marginTop: 15,
      marginRight: 15,
      responsive: {
        'enabled': true
      },
      dataProvider: [
        { date: new Date(2013, 0), value: 80000, value0: 75000},
        { date: new Date(2013, 1), value: 81000, value0: 80000},
        { date: new Date(2013, 2), value: 83000, value0: 82000},
        { date: new Date(2013, 3), value: 87000, value0: 90000},
        { date: new Date(2013, 4), value: 90000, value0: 85000},
        { date: new Date(2013, 5), value: 88000, value0: 70000},
        { date: new Date(2013, 6), value: 90000, value0: 75000},
        { date: new Date(2013, 7), value: 92000, value0: 81000},
        { date: new Date(2013, 8), value: 95000, value0: 78000},
        { date: new Date(2013, 9), value: 94000, value0: 83000},
        { date: new Date(2013, 10), value: 96000, value0: 84000},
        { date: new Date(2013, 11), value: 95000, value0: 81000}
      ],
      categoryField: 'date',
      categoryAxis: {
        parseDates: true,
        gridAlpha: 0,
        color: layoutColors.defaultText,
        axisColor: layoutColors.defaultText
      },
      valueAxes: [
        {
          minVerticalGap: 50,
          gridAlpha: 0,
          color: layoutColors.defaultText,
          axisColor: layoutColors.defaultText
        }
      ],
      graphs: [
        {
          id: 'g0',
          bullet: 'none',
          useLineColorForBulletBorder: true,
          lineColor: colorHelper.hexToRgbA(graphColor, 0.4),
          lineThickness: 1,
          negativeLineColor: layoutColors.danger,
          type: 'smoothedLine',
          valueField: 'value0',
          fillAlphas: 1,
          fillColorsField: 'lineColor'
        },
        {
          id: 'g1',
          bullet: 'none',
          useLineColorForBulletBorder: true,
          lineColor: colorHelper.hexToRgbA(graphColor, 0.2),
          lineThickness: 1,
          negativeLineColor: layoutColors.danger,
          type: 'smoothedLine',
          valueField: 'value',
          fillAlphas: 1,
          fillColorsField: 'lineColor'
        }
      ],
      chartCursor: {
        categoryBalloonDateFormat: 'MM YYYY',
        categoryBalloonColor: '#4285F4',
        categoryBalloonAlpha: 0.7,
        cursorAlpha: 0,
        valueLineEnabled: true,
        valueLineBalloonEnabled: true,
        valueLineAlpha: 0.5
      },
      dataDateFormat: 'MM YYYY',
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-right',
      zoomOutButton: {
        backgroundColor: '#fff',
        backgroundAlpha: 0
      },
      zoomOutText: '',
      pathToImages: layoutPaths.images.amChart
    };
  }
}
