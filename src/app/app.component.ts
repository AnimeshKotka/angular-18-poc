import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-18-poc';

  constructor(private router: Router) {}

  selectedTabIndex: number = 0;
  public tabs: { label: string, action: any }[] = [
    { label: 'Home', action: { redirectTo: 'home' } },
    { label: 'Dynamic Component', action: { redirectTo: 'dynamic-example' } },
  ];

  selectTab(tab: any, index: number) {
    this.selectedTabIndex = index;

    if (tab.action && tab?.action?.redirectTo) {
      this.router.navigate([tab.action.redirectTo]);
    }
  }
}
