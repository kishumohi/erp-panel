import { Component } from '@angular/core';
import { AppHeader } from './app-header/app-header';
import { AppBody } from './app-body/app-body';
import { AppSidebar } from './app-sidebar/app-sidebar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-app-layout',
  imports: [AppHeader, AppBody, AppSidebar, RouterOutlet],
  templateUrl: './app-layout.html',
  styleUrl: './app-layout.scss',
})
export class AppLayout {}
