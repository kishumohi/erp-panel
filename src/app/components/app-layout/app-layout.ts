import { Component } from '@angular/core';
import { AppHeader } from './app-header/app-header';
import { AppBody } from './app-body/app-body';
import { AppSidebar } from './app-sidebar/app-sidebar';

@Component({
  selector: 'app-app-layout',
  imports: [AppHeader, AppBody, AppSidebar],
  templateUrl: './app-layout.html',
  styleUrl: './app-layout.scss',
})
export class AppLayout {}
