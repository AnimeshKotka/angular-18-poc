import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EagerChild1Component } from './eager-child1.component';

describe('EagerChild1Component', () => {
  let component: EagerChild1Component;
  let fixture: ComponentFixture<EagerChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EagerChild1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EagerChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
