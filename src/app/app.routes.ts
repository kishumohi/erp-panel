import { Routes } from '@angular/router';
import { AppDashboard } from './pages/app-dashboard/app-dashboard';
import { AppLayout } from './app-layout/app-layout';
import { AppMaster } from './pages/app-master/app-master';

export const routes: Routes = [
  {
    path: '',
    component: AppLayout,
    children: [
      { path: '', component: AppDashboard },
      { path: 'master', component: AppMaster },
    ],
  },
];
