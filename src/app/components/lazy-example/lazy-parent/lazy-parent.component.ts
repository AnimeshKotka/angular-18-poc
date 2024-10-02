import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lazy-parent',
  templateUrl: './lazy-parent.component.html',
  styleUrl: './lazy-parent.component.scss'
})
export class LazyParentComponent {
  constructor(private router: Router, private route: ActivatedRoute) { }

  selectedTabIndex: number = 0;
  public tabs: { label: string, action: any }[] = [
    { label: 'eager-child1', action: { redirectTo: 'eager-child1' } },
    { label: 'eager-child2', action: { redirectTo: 'eager-child2' } }
  ];

  selectTab(tab: any, index: number) {
    this.selectedTabIndex = index;

    if (tab.action && tab?.action?.redirectTo) {
      this.router.navigate([tab.action.redirectTo], { relativeTo: this.route });
    }
  }
}
