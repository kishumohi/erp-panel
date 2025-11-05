import { Component } from '@angular/core';
import { DashTitle } from './dash-title/dash-title';
import { DashCard } from './dash-card/dash-card';
import { DashChart } from './dash-chart/dash-chart';

@Component({
  selector: 'app-app-dashboard',
  imports: [DashTitle, DashCard, DashChart],
  templateUrl: './app-dashboard.html',
  styleUrl: './app-dashboard.scss',
})
export class AppDashboard {}
