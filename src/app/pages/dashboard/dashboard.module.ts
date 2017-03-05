import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';

import { TrafficChart } from './trafficChart';
import { LineChart } from './lineChart';
import { Todo } from './todo';
import { LineChartService } from './lineChart/lineChart.service';
import { TodoService } from './todo/todo.service';
import { TrafficChartService } from './trafficChart/trafficChart.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    TrafficChart,
    LineChart,
    Todo,
    Dashboard
  ],
  providers: [
    LineChartService,
    TodoService,
    TrafficChartService
  ]
})
export default class DashboardModule {}
