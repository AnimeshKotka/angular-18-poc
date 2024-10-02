import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyRoutingModule } from './lazy-routing.module';
import { LazyParentComponent } from './lazy-parent/lazy-parent.component';
import { EagerChild1Component } from './eager-child1/eager-child1.component';
import { EagerChild2Component } from './eager-child2/eager-child2.component';

@NgModule({
  declarations: [
    LazyParentComponent,
    EagerChild1Component,
    EagerChild2Component
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
