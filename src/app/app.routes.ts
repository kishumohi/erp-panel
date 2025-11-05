import { Routes } from '@angular/router';
import { AppLayout } from './components/app-layout/app-layout';
import { AppDashboard } from './pages/app-dashboard/app-dashboard';

export const routes: Routes = [
  { path: '', component: AppLayout, children: [{ path: '', component: AppDashboard }] },
];
