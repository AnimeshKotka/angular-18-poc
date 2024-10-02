
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyParentComponent } from './lazy-parent/lazy-parent.component';
import { EagerChild1Component } from './eager-child1/eager-child1.component';
import { EagerChild2Component } from './eager-child2/eager-child2.component';
const routes: Routes = [
    {
        path: '',
        component: LazyParentComponent,
        children: [
            {
                path: 'eager-child1',
                component: EagerChild1Component,
                title: 'Eager Child1'
            },
            {
                path: 'eager-child2',
                component: EagerChild2Component,
                title: 'Eager Child2'
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'eager-child1'
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LazyRoutingModule { }